async function main() {
    const {categories, questions} = await import("./questions_" + jekyll_lang + ".js");
    const {answers} = await import("./answers.js");
    const {limesurvey_answers} = await import("./limesurvey_data.js");
    const old_answers = answers.concat(limesurvey_answers);
    // TODO: Load actual answers instead of debug values
    const new_answers = [{
        categories: [0, 0, 0, 0],
        questions: [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
    }];
    const conference_answers = [{
        categories: [4, 2, 3, 5],
        questions: [[0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0], [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1], [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 0, 1, 0, 1], [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0]]
    }];
    const {translation} = await import("./translation.js");
    const show_limesurvey_buttons = true;
    // indices: old, new, conference
    let current_data = [true, true, true];

    // media query, taken from materialize.min.css
    const media_query = window.matchMedia("only screen and (max-width: 992px)");

    // global variable keeping track which question should be displayed
    let active_question = 0;
    // global variable keeping track which question categories are active, per question
    let active_question_categories = questions.map((d) => d.hasOwnProperty('categories') ? d3.range(d.categories.length) : []);

    // global array keeping track which categories of participants are currently active
    // for each category there is an array of active incides, an empty array shall be equivalent to an array containing all possible indices
    let active_categories = categories.map(() => []);

    const width_categories = 475, width_questions = 765;
    let viewBox_width = width_categories + width_questions;
    let y_categories = 0, y_question = 50;
    let height_categories = 0, height_question = 0, height_question_text = 89;
    const height_button = 40;
    const width_button = width_questions / questions.length;
    // create svg to fill with visualization
    const main_svg = d3.select("div#karobau_viz").append("svg")
        // .attr("height", 850)
        .attr("width", "100%")
        .attr("viewBox", `0 0 ${width_categories + width_questions} 850`)
        .attr("preserveAspectRatio", "xMidYMin meet")
        .attr("id", "karobau_viz_svg");

    const main_g = main_svg.append("g")
        .classed("viz_root", true);

    // create circles for selecting categories
    const structure_categories = main_g.append(() => create_category_selection(0, y_categories));
    // basic structure for sentiment questions
    const structure_sentiment = main_g.append(() => create_sentiment_scale(width_categories, y_question)).attr("display", "none");
    // basic structure for yes/no questions
    const structure_yesno = main_g.append(() => create_yesno_scale(width_categories, y_question)).attr("display", "none");
    // tabs to switch between questions
    const structure_tabs = main_g.append(() => create_tabs(width_categories, 0));
    // button to toggle category view on mobile
    const category_toggle = main_g.append(() => create_category_toggle(width_categories, 0)).attr("display", "none");
    let show_categories = false;

    update_categories();
    update_question();

    // if needed, add buttons for limesurvey
    const limesurvey_buttons = main_g.append(() => create_limesurvey_toggle(width_categories, 0));
    if (show_limesurvey_buttons) {
        // move to make space for button
        structure_yesno.attr("transform", `translate(${width_categories}, ${y_question + 40})`);
        structure_sentiment.attr("transform", `translate(${width_categories}, ${y_question + 40})`);
        structure_tabs.attr("transform", `translate(${width_categories}, 40)`);
    }


    // call listener once, to setup correct layout on page load
    event_listener(media_query);
    // setup event listener, to change layout when media query changes result
    media_query.addEventListener("change", event_listener);

    /**
     * @summary This function creates circles for selecting the categories of survey participants.
     * @param pos_x{number}
     * @param pos_y{number}
     * @returns {SVGGElement} a svg group element containing the circles
     */
    function create_category_selection(pos_x = 0, pos_y = 0) {
        // create root group
        const root = d3.create("svg:g")
            .attr("transform", `translate(${pos_x}, ${pos_y})`)
            .attr("id", "category_selection");

        root.append("text")
            .classed("header", true)
            .text(translation.overview[jekyll_lang])
            .attr("x", width_categories / 2)
            .attr("y", 20)
            .attr("dominant-baseline", "central")
            .attr("text-anchor", "middle");

        return root.node();
    }

    /**
     * @summary This function creates a stacked bar chart to visualize sentiment across different subquestions.
     * @param pos_x
     * @param pos_y
     * @returns {SVGGElement}
     */
    function create_sentiment_scale(pos_x = 0, pos_y = 0) {
        // create root group
        const root = d3.create("svg:g")
            .attr("transform", `translate(${pos_x}, ${pos_y})`)
            .attr("id", "question_sentiment");

        // text label for question
        root.append("text")
            .attr("dominant-baseline", "hanging")
            .classed("question_label", true);

        // create root for bars
        root.append("g")
            .attr("transform", `translate(0, ${height_question_text})`)
            .classed("bar_root", true);

        // create root for legend
        root.append("g")
            .attr("transform", `translate(600, ${height_question_text})`)
            .classed("legend_root", true);

        return root.node();
    }

    function create_yesno_scale(pos_x = 0, pos_y = 0) {
        // create root group
        const root = d3.create("svg:g")
            .attr("transform", `translate(${pos_x}, ${pos_y})`)
            .attr("id", "question_yesno");

        // text label for question
        root.append("text")
            .attr("dominant-baseline", "hanging")
            .classed("question_label", true);

        // create root for bars
        const root_bars = root.append("g")
            .attr("transform", `translate(0, ${height_question_text})`)
            .classed("bar_root", true);

        // create axis label
        root_bars.append("text")
            .text("Zustimmung in Prozent")
            .classed("axis_label", true)
            .attr("dominant-baseline", "hanging")
            .attr("text-anchor", "middle");

        return root.node();
    }

    function get_current_answers() {
        let current_answers = [];
        if (current_data[0]) current_answers = current_answers.concat(old_answers);
        if (current_data[1]) current_answers = current_answers.concat(new_answers);
        if (current_data[2]) current_answers = current_answers.concat(conference_answers);
        return current_answers
    }

    /**
     * @summary This function accumulates and counts the answers per question
     * @param i index of question in {@link data}
     * @returns {number[][]} two-dimensional array, for each subquestion an array with the number of answers per answer option
     */
    function accumulate_answers(i) {
        let current_answers = get_current_answers();
        const question = questions[i];
        // select valid answers based on categories and given question index
        let filtered_answers = current_answers
            // filter answers, only allow those where all subcategories are active
            .filter(d => d.categories.every((sub_cat, cat) => is_active(cat, sub_cat)))
            // get answers of question i
            .map(d => d.questions[i]);
        // transpose, list of answers per person => list of answers per subquestion
        let answers_transposed = d3.transpose(filtered_answers);
        // array [0, 1, ..., length - 1]
        let values = d3.range(question.values.length);
        if (question.type === "sentiment")
            // count answers as well as sum positive, neutral and negative answers
            return answers_transposed
                .map(subquestion => values.map(v => subquestion.filter(i => i === v).length))
                .map(a => ({
                    answers: question.negative.map((d, i) => ({value: a[d], index: i, type: -1}))
                        .concat(question.neutral.map((d, i) => ({value: a[d], index: i, type: 0})))
                        .concat(question.positive.map((d, i) => ({value: a[d], index: i, type: 1}))),
                    sum_negative: d3.sum(question.negative, j => a[j]),
                    sum_neutral: d3.sum(question.neutral, j => a[j]),
                    sum_positive: d3.sum(question.positive, j => a[j])
                })); else
            // count answers
            return answers_transposed.map(subquestion => values.map(v => subquestion.filter(i => i === v).length));
    }

    function accumulate_categories(i) {
        let current_answers = get_current_answers();
        // select subcategory answers based on given category index and other active subcategories
        let other_categories = d3.range(categories.length).filter(j => j !== i);
        let filtered_answers = current_answers
            // filter by other active subcategories
            .filter(d => other_categories.every(o => is_active(o, d.categories[o])))
            // get list of subcategory answers for category i
            .map(d => d.categories[i]);
        // array [0, 1, ..., length - 1]
        let values = d3.range(categories[i].values.length);
        // count subcategories
        return values.map(v => filtered_answers.filter(i => i === v).length);
    }

    function update_text(selection, new_str) {
        let lines = new_str.split("\n");
        const index = lines.indexOf("");
        lines = lines.filter(d => d !== "");
        // update text
        selection.selectAll("tspan").data(lines).join("tspan")
            .text(d => d)
            .attr("dy", (d, i) => i === index ? "2.4em" : (i > 0 ? "1.2em" : null))
            .attr("x", 0)
            .attr("font-weight", (d, i) => i >= index && index > -1 ? "bold" : null);
    }

    function create_tabs(pos_x = 0, pos_y = 0) {
        const width_tabs = width_questions, height_tab = 40;
        const num_questions = questions.length;
        const scale_tab = d3.scaleBand()
            .domain(d3.range(num_questions))
            .rangeRound([0, width_tabs]);
        // create root element
        const root = d3.create("svg:g")
            .attr("transform", `translate(${pos_x}, ${pos_y})`)
            .attr("id", "tabs");
        // create tab
        const tab = root.selectAll("g").data(questions.map(d => d.label)).join("g")
            .on("click", function (d, i) {
                // don't do anything if click on active tab
                if (i === active_question) return;
                active_question = i;
                // redraw tabs with new colors
                update_tabs();
                // redraw question
                update_question();
            })
            .classed("hover_shadow", true);
        // create a colored rectangle
        tab.append("rect")
            .attr("x", (d, i) => scale_tab(i))
            .attr("width", scale_tab.bandwidth())
            .attr("height", height_tab)
            .attr("class", (d, i) => i === active_question ? "tab active" : "tab inactive");
        // add text
        tab.append("g")
            .attr("transform", (d, i) => `translate(${scale_tab.bandwidth() / 2 + scale_tab(i)}, 0)`)
            .append("text")
            .attr("x", 0)
            .attr("y", height_tab / 2)
            .attr("dominant-baseline", "middle")
            .attr("text-anchor", "middle")
            .selectAll("tspan").data(d => d.split("\n")).join("tspan")
            .text(d => d)
            .attr("dy", (d, i, a) => i > 0 ? "1.2em" : a.length > 1 ? `-${(a.length - 1) * 0.6}em` : null)
            .attr("x", 0);
        return root.node();
    }

    function update_tabs() {
        const root = main_g.select("g#tabs");
        // recolor rectangles
        root.selectAll("rect.tab")
            .attr("class", (d, i) => i === active_question ? "tab active" : "tab inactive");
    }

    function update_categories() {
        const offset_header = 40;
        const size_bigcircle = 220;
        const scale_bigcircle = d3.scaleBand()
            .domain(d3.range(categories.length))
            .range([offset_header, size_bigcircle * categories.length + offset_header])
            .padding(0.15);

        // calculate required height for viewBox calculation
        // this is essentially the y coordinate of the bottom of the last big circle
        height_categories = scale_bigcircle.range()[1] - scale_bigcircle.step() * scale_bigcircle.paddingOuter();

        // create a d3 hierarchy for each category
        const category_hierarchies = categories.map((c, i) => d3.hierarchy({
            name: c.category, children: d3.zip(c.values, accumulate_categories(i)).map((d, j) => ({
                name: d[0], value: d[1], category: i, subcategory: j
            })).filter(d => d.value > 0), category: i
        })
            .sum(d => d.value)
            .sort((a, b) => b.value - a.value));
        // create pack layout (general settings)
        const pack_layout = d3.pack()
            .size([scale_bigcircle.bandwidth(), scale_bigcircle.bandwidth()])
            .padding(5);
        // calculate circle positions and radii
        category_hierarchies.forEach(pack_layout);

        const num_subcategories = category_hierarchies.map(d => d.children.length);

        // array of color scales, one for each category
        const colors_enabled = num_subcategories.map((d, i) => {
            const c1 = d3.schemeCategory10[i];
            let c2 = d3.hsl(c1);
            c2.l = 0.9;
            // since we use the number of remaining subcategories, we need to treat d == 1 separately, a domain of [0, 0] is invalid
            return d > 1 ? d3.scaleLinear().domain([0, d - 1]).range([c1, c2]) : d3.scaleLinear().domain([0, 0.01]).range([c1, c2]);
        });
        const colors_disabled = num_subcategories.map((d, i) => {
            let c1 = d3.hsl(d3.schemeCategory10[i]);
            c1.s = 0.2;
            let c2 = d3.hsl(d3.schemeCategory10[i]);
            c2.s = 0.2;
            c2.l = 0.9;
            // since we use the number of remaining subcategories, we need to treat d == 1 separately, a domain of [0, 0] is invalid
            return d > 1 ? d3.scaleLinear().domain([0, d - 1]).range([c1, c2]) : d3.scaleLinear().domain([0, 0.01]).range([c1, c2]);
        });

        const bigcircle_origin = structure_categories.selectAll("g.bigcircle_origin").data(category_hierarchies).join("g")
            .attr("transform", (d, i) => `translate(0, ${scale_bigcircle(i)})`)
            .classed("bigcircle_origin", true);

        // category label
        bigcircle_origin.selectAll("text.category_label").data(d => [d.data.name]).join("text")
            .text(d => d)
            .attr("x", 20)
            .attr("y", "-0.4em")
            .classed("category_label", true);

        // draw the big circle
        bigcircle_origin.selectAll("circle.bigcircle").data(d => [d]).join("circle")
            .classed("bigcircle", true)
            .classed("hover_shadow", true)
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("r", d => d.r)
            .on("click", function (d) {
                // reenable all subcategories
                active_categories[d.data.category] = [];
                // redraw category selection
                update_categories();
                // redraw question
                update_question();
            });

        // draw the smaller circles
        // the big circle has depth 0, each child (and therefore the smaller ones) has depth 1 in the hierarchy
        bigcircle_origin
            .selectAll("circle.smallcircle")
            .data(d => d.descendants().filter(x => x.depth === 1), d => `${d.data.category}_${d.data.subcategory}`)
            .join(enter => enter.append("circle")
                .classed("smallcircle", true)
                .classed("hover_shadow", true)
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
                .attr("fill", (d, i) => is_active(d.data.category, d.data.subcategory) ? colors_enabled[d.data.category](i) : colors_disabled[d.data.category](i))
                .on("click", function (d) {
                    let category = d.data.category, subcategory = d.data.subcategory;
                    // handling changing categories
                    let index = active_categories[category].indexOf(subcategory);
                    if (index > -1) {
                        // category.subcategory is currently active, remove from array
                        active_categories[category].splice(index, 1);
                    } else {
                        // category.subcategory is currently inactive, add to array
                        active_categories[category].push(subcategory);
                    }
                    // redraw category selection
                    update_categories();
                    // redraw question
                    update_question();
                })
                .call(e => e.transition().attr("r", d => d.r)), update => update
                .call(u => u.transition()
                    .attr("r", d => d.r)
                    .attr("cx", d => d.x)
                    .attr("cy", d => d.y)
                    .attr("fill", (d, i) => is_active(d.data.category, d.data.subcategory) ? colors_enabled[d.data.category](i) : colors_disabled[d.data.category](i))), exit => exit.call(e => e.transition().attr("r", 0).remove()));

        // origins for legend, using the same data as for the smaller circles
        bigcircle_origin.selectAll("g.legend").data(d => d.descendants().filter(x => x.depth === 1), d => `${d.data.category}_${d.data.subcategory}`).join(function (enter) {
            const origin = enter.append("g")
                .classed("legend", true)
                .attr("transform", (d, i, a) => `translate(${scale_bigcircle.bandwidth() + 25}, ${scale_bigcircle.bandwidth() / 2 - 15 * a.length + 10 + 30 * i})`);

            // add small colored square
            origin.append("rect")
                .attr("width", 10)
                .attr("height", 10)
                .style("fill", (d, i) => colors_enabled[d.data.category](i));

            // add label
            origin.append("text")
                .text(d => d.data.name)
                .attr("x", 15)
                .attr("y", 5)
                .attr("dominant-baseline", "central")
                .classed("category_active", d => is_active(d.data.category, d.data.subcategory));
            return origin;
        }, function (update) {
            // all data is sorted by size of subcategory
            // therefore position and color is subject to change
            // update color immediately
            update.select("rect").style("fill", (d, i) => colors_enabled[d.data.category](i));
            // animate label to new position
            update.transition()
                .attr("transform", (d, i, a) => `translate(${scale_bigcircle.bandwidth() + 25}, ${scale_bigcircle.bandwidth() / 2 - 15 * a.length + 10 + 30 * i})`);
            // update text emphasis
            update.select("text").classed("category_active", d => is_active(d.data.category, d.data.subcategory));
            return update;
        });
    }

    function update_question() {
        if (questions[active_question].type === "sentiment") {
            structure_sentiment.attr("display", null);
            structure_yesno.attr("display", "none");
            update_sentiment_scale();
        } else {
            structure_sentiment.attr("display", "none");
            structure_yesno.attr("display", null);
            update_yesno_scale();
        }
        set_svg_size();
    }

    function update_sentiment_scale() {
        const height_bar = 40, width_bar = 300;
        const height_category = 40;
        const offset_bars = 250;

        const question = questions[active_question], answers = accumulate_answers(active_question);
        const local_data = d3.zip(question.subquestions, answers);
        const num_questions = local_data.length, num_values = question.values.length;

        // colors
        const color_very_negative = "#5f9ed1", color_slightly_negative = "#a2c8ec", color_neutral = "#cfcfcf",
            color_slightly_positive = "#ffbc79", color_very_positive = "#ff800e";
        const color_interpolator_negative = d3.interpolateRgb(color_very_negative, color_slightly_negative);
        const colors_negative = question.negative.length === 1 ? [color_interpolator_negative(1 / 3)] : question.negative.map((d, i, a) => color_interpolator_negative(i / a.length));
        const color_interpolator_positive = d3.interpolateRgb(color_slightly_positive, color_very_positive);
        const colors_positive = question.positive.length === 1 ? [color_interpolator_positive(2 / 3)] : question.positive.map((d, i, a) => color_interpolator_positive(i / a.length));
        const colors = colors_negative.concat(question.neutral.map(() => color_neutral)).concat(colors_positive);

        // calculation for centering the bars on the neutral subbars
        const num_left = d3.max(answers, a => a.sum_negative + a.sum_neutral / 2),
            num_right = d3.max(answers, a => a.sum_positive + a.sum_neutral / 2);
        const num_max = Math.max(num_left, num_right);
        // assumption for now: all bars have same scale, so they might differ in length based on non-standard answers
        const scale_bar_horizontal = d3.scaleLinear()
            .domain([0, 2 * num_max])
            .rangeRound([0, width_bar]);

        const scale_legend = d3.scaleBand()
            .domain(d3.range(num_values))
            .range([0, 30 * num_values]);

        // update text label for question
        update_text(structure_sentiment.select("text.question_label"), question.question);

        // select root for bars
        const root_bars = structure_sentiment.select("g.bar_root");

        // TODO: This causes code duplication for creating the bars, but this is the quickest method to get presentable results
        // check if question has categories
        if (question.hasOwnProperty("categories")) {
            const question_categories = question.categories;
            // array containing true/false whether category is active and should be shown
            const is_active_category = question_categories.map((d, i) => active_question_categories[active_question].indexOf(i) > -1);
            const scales_bar_vertical = question_categories.map(d => d3.scaleBand()
                .domain(d3.range(d.values.length))
                .rangeRound([0, height_bar * d.values.length])
                .paddingInner(0.08));
            const visible_height = is_active_category.map((d, i) => d ? scales_bar_vertical[i].range()[1] : 0);
            // vertical offsets for category bars, this is height_bar more then the previous offset,
            // in addition to the height of the visible bars
            const vertical_offsets = [].slice.call(d3.cumsum([0].concat(visible_height.slice(0, -1).map(d => d + height_bar))));
            // calculate required height for viewBox calculation
            // this is essentially the y coordinate of the bottom of the last visible bar
            height_question = d3.sum(visible_height) + height_bar * question_categories.length + height_question_text;

            // remove all bars not contained in a category container
            root_bars.selectAll("g.bar_container.no_category").remove();
            // add category container
            const category_container = root_bars.selectAll("g.question_category_container")
                .data(question_categories, d => `${active_question}_${d.name}`)
                .join(enter => enter.append("g")
                        .classed("question_category_container", true)
                        .attr("transform", (d, i) => `translate(0, ${vertical_offsets[i]})`),
                    update => update.call(u => u.transition().attr("transform", (d, i) => `translate(0, ${vertical_offsets[i]})`))
                );
            // update toggleable bars
            const category_bar = category_container.selectAll("g.question_category_bar").data((d, i) => [[d, i]]).join("g")
                .classed("hover_shadow", true)
                .on("click", function (d) {
                    let index = active_question_categories[active_question].indexOf(d[1]);
                    if (index > -1) {
                        // clicked question category is currently shown, remove from array
                        active_question_categories[active_question].splice(index, 1);
                    } else {
                        // clicked question category is currently hidden, add to array
                        active_question_categories[active_question].push(d[1])
                    }
                    // redraw question
                    update_question();
                });
            // update rect
            category_bar.selectAll("rect").data(d => [d[0]]).join("rect")
                .classed("question_category", true)
                .attr("height", height_category)
                .attr("width", width_bar + offset_bars);
            // update category text
            category_bar.selectAll("text").data(d => [d[0].name]).join("text")
                .text(d => d)
                .attr("dominant-baseline", "central")
                .attr("y", height_category / 2);

            // update bar containers
            const bar_container = category_container.selectAll("g.bar_container")
                .data((d, i) => is_active_category[i] ? d.values.map(j => [local_data[j], i]) : [], d => `${active_question}_${d[0]}`)
                .join(enter => enter.append("g")
                    .attr("transform", `translate(0, ${height_bar})`))
                .classed("bar_container", true)
                .call(e => e.transition()
                    .attr("transform", (d, i) => `translate(0, ${height_bar + scales_bar_vertical[d[1]](i)})`));

            // update individual bars
            const bar_origin = bar_container.selectAll("g.bar_origin").data(d => [d[0][1]]).join("g")
                .classed("bar_origin", true)
                .attr("transform", `translate(${offset_bars},0)`);

            bar_origin.selectAll("rect").data(function (answ) {
                let offset = num_max - answ.sum_negative - answ.sum_neutral / 2;
                // calculate position of left edge of rect
                // the first bar should start at the calculated offset value
                let start_x = d3.cumsum([offset].concat(answ.answers.map(d => d.value))).map(scale_bar_horizontal);
                let bar_width = [].slice.call(start_x)
                    .map((d, i, a) => a[i + 1] - d).slice(0, -1);
                return d3.zip(start_x, bar_width, colors);
            }).join(enter => enter.append("rect")
                // TODO: use correct scale, i. e. replace index 0 with current question category?
                .attr("height", scales_bar_vertical[0].bandwidth())
                .attr("width", d => d[1])
                .attr("x", d => d[0])
                .style("fill", d => d[2]), update => update.call(u => u.transition()
                .attr("width", d => d[1])
                .attr("x", d => d[0])));

            // update text label
            bar_container.selectAll("text").data(d => [d[0][0]]).join("text")
                .attr("dominant-baseline", "central")
                .attr("y", 40 / 2)
                .selectAll("tspan").data(d => d.split("\n")).join("tspan")
                .text(d => d)
                .attr("dy", (d, i, a) => i > 0 ? "1.2em" : a.length > 1 ? `-${(a.length - 1) * 0.6}em` : null)
                .attr("x", 0);

        } else {
            const scale_bar_vertical = d3.scaleBand()
                .domain(d3.range(num_questions))
                .rangeRound([0, height_bar * num_questions])
                .paddingInner(0.08);
            // calculate required height for viewBox calculation
            // this is essentially the y coordinate of the bottom of the last bar
            height_question = scale_bar_vertical.range()[1] - scale_bar_vertical.step() * scale_bar_vertical.paddingOuter() + height_question_text;

            // remove category selectors
            root_bars.selectAll("g.question_category_container").remove();
            // update bar containers
            const bar_container = root_bars.selectAll("g.bar_container").data(local_data, d => `${active_question}_${d[0]}`).join("g")
                .classed("bar_container", true)
                .classed("no_category", true)
                .attr("transform", (d, i) => `translate(0, ${scale_bar_vertical(i)})`);

            // update individual bars
            const bar_origin = bar_container.selectAll("g.bar_origin").data(d => [d[1]]).join("g")
                .classed("bar_origin", true)
                .attr("transform", `translate(${offset_bars},0)`);

            bar_origin.selectAll("rect").data(function (answ) {
                let offset = num_max - answ.sum_negative - answ.sum_neutral / 2;
                // calculate position of left edge of rect
                // the first bar should start at the calculated offset value
                let start_x = d3.cumsum([offset].concat(answ.answers.map(d => d.value))).map(scale_bar_horizontal);
                let bar_width = [].slice.call(start_x)
                    .map((d, i, a) => a[i + 1] - d).slice(0, -1);
                return d3.zip(start_x, bar_width, colors);
            }).join(enter => enter.append("rect")
                .attr("height", scale_bar_vertical.bandwidth())
                .attr("width", d => d[1])
                .attr("x", d => d[0])
                .style("fill", d => d[2]), update => update.call(u => u.transition()
                .attr("width", d => d[1])
                .attr("x", d => d[0])));

            // update text label
            bar_container.selectAll("text").data(d => [d[0]]).join("text")
                .attr("dominant-baseline", "central")
                .attr("y", scale_bar_vertical.bandwidth() / 2)
                .selectAll("tspan").data(d => d.split("\n")).join("tspan")
                .text(d => d)
                .attr("dy", (d, i, a) => i > 0 ? "1.2em" : a.length > 1 ? `-${(a.length - 1) * 0.6}em` : null)
                .attr("x", 0);
        }
        // select root for legend
        const root_legend = structure_sentiment.select("g.legend_root");
        // update legend
        root_legend.selectAll("g.legend_origin").data(question.negative.concat(question.neutral).concat(question.positive).map(i => question.values[i])).join(function (enter) {
            // the enter selection contains all new elements
            // first create origins
            const labels = enter.append("g")
                .attr("transform", (d, i) => `translate(0, ${scale_legend(i)})`)
                .classed("legend_origin", true);

            // small square for color reference
            labels.append("rect")
                .attr("width", 10)
                .attr("height", 10)
                .style("fill", (d, i) => colors[i]);

            // text with answer value
            labels.append("text")
                .text(d => d)
                .attr("x", 15)
                .attr("y", "0.6em");
            return labels;
        }, function (update) {
            // update color of square
            update.select("rect")
                .style("fill", (d, i) => colors[i]);
            // update label text
            update.select("text")
                .text(d => d);
            return update;
        })
    }

    function update_yesno_scale() {
        const height_bar = 40, width_bar = 300;

        const question = questions[active_question], answers = accumulate_answers(active_question);
        const local_data = d3.zip(question.subquestions, answers);
        const num_questions = local_data.length, num_answers = d3.max(answers, d => d[0] + d[1]);

        const scale_bar_horizontal = d3.scaleLinear()
            .domain([0, num_answers > 0 ? d3.max(answers, d => d[1]) * 100 / num_answers : 2])
            .rangeRound([0, width_bar]);

        const scale_bar_vertical = d3.scaleBand()
            .domain(d3.range(num_questions))
            .rangeRound([0, height_bar * num_questions])
            .paddingInner(0.08);

        // calculate required height for viewBox calculation
        // this is the bottom of the axis label
        height_question = scale_bar_vertical.range()[1] + 30 + height_question_text;

        // update text label for question
        update_text(structure_yesno.select("text.question_label"), question.question);

        // select root for bars
        const root_bars = structure_yesno.select("g.bar_root");
        // update bar containers
        const bar_container = root_bars.selectAll("g.bar_container").data(local_data, d => `${active_question}_${d[0]}`).join("g")
            .classed("bar_container", true)
            .attr("transform", (d, i) => `translate(0, ${scale_bar_vertical(i)})`);

        // update individual bars
        bar_container.selectAll("rect.bar_yesno")
            .data(d => [num_answers > 0 ? d[1][1] * 100 / num_answers : 0])
            .join(enter => enter.append("rect")
                .attr("height", scale_bar_vertical.bandwidth())
                .attr("width", d => scale_bar_horizontal(d))
                .attr("x", 250)
                .classed("bar_yesno", true), update => update.transition()
                .attr("width", d => scale_bar_horizontal(d))
            );

        // update bar label
        bar_container.selectAll("text.bar_yesno_label").data(d => {
            const p = num_answers > 0 ? d[1][1] * 100 / num_answers : 0;
            return [[p, scale_bar_horizontal(p) >= 30]];
        }).join(enter => enter.append("text")
            .attr("x", d => 250 + scale_bar_horizontal(d[0]) + (d[1] ? -10 : 10))
            .attr("y", scale_bar_vertical.bandwidth() / 2)
            .classed("bar_yesno_label", true)
            .attr("dominant-baseline", "central")
            .attr("text-anchor", d => d[1] ? "end" : "start")
            .text(d => Math.round(d[0])), update => update.transition()
            .attr("x", d => 250 + scale_bar_horizontal(d[0]) + (d[1] ? -10 : 10))
            .attr("text-anchor", d => d[1] ? "end" : "start")
            .text(d => Math.round(d[0])));

        // update text label
        bar_container.selectAll("text.subquestion").data(d => [d[0]]).join("text")
            .attr("dominant-baseline", "central")
            .attr("y", scale_bar_vertical.bandwidth() / 2)
            .classed("subquestion", true)
            .selectAll("tspan").data(d => d.split("\n")).join("tspan")
            .text(d => d)
            .attr("dy", (d, i, a) => i > 0 ? "1.2em" : a.length > 1 ? `-${(a.length - 1) * 0.6}em` : null)
            .attr("x", 0);

        // update axis label
        root_bars.select("text.axis_label")
            .attr("x", 250 + width_bar / 2)
            .attr("y", scale_bar_vertical.range()[1]);
    }

    function is_active(category, subcategory) {
        return active_categories[category].length === 0 || active_categories[category].indexOf(subcategory) > -1;
    }

    function set_svg_size() {
        let required_height = Math.max(y_question + height_question, y_categories + height_categories);
        if (media_query.matches) required_height += height_button;
        main_svg
            .attr("viewBox", `0 0 ${viewBox_width} ${required_height}`);
    }

    function create_category_toggle(pos_x, pos_y) {
        const root = d3.create("svg:g")
            .attr("transform", `translate(${pos_x}, ${pos_y})`)
            .classed("hover_shadow", true)
            .on("click", function () {
                show_categories = !show_categories;
                // trigger layout update
                event_listener(media_query);
            });
        root.append("rect")
            .attr("width", width_button)
            .attr("height", height_button)
            .classed("category_toggle", true);
        root.append("text")
            .text("Teilnehmer")
            .attr("x", width_button / 2)
            .attr("y", height_button / 2)
            .attr("dominant-baseline", "central")
            .attr("text-anchor", "middle");
        return root.node();
    }

    function create_limesurvey_toggle(pos_x, pos_y) {
        const root = d3.create("svg:g")
            .attr("transform", `translate(${pos_x}, ${pos_y})`)
            .attr("id", "tabs");
        if (!show_limesurvey_buttons) return root.node();
        // position buttons next to toggle button for mobile view
        // TODO: Translate
        const labels = [translation.old_results[jekyll_lang], translation.new_results[jekyll_lang], translation.conference[jekyll_lang]];
        if (media_query.matches) pos_x += width_button;
        const tab = root.selectAll("g").data(labels).join("g")
            .attr("transform", (d, i) => `translate(${i * width_button}, 0)`)
            .on("click", function (d, i) {
                current_data[i] = !current_data[i];
                // keep at least one dataset
                if (current_data.every(x => x === false)) {
                    current_data[i] = true;
                }
                // redraw everything
                update_categories();
                update_question();
            })
            .classed("hover_shadow", true);
        // create colored rectangle
        tab.append("rect")
            .attr("width", width_button)
            .attr("height", height_button)
            .classed("category_toggle", true);
        // add text
        tab.append("text")
            .attr("x", width_button / 2)
            .attr("y", height_button / 2)
            .attr("dominant-baseline", "middle")
            .attr("text-anchor", "middle")
            .text(d => d);
        return root.node();
    }

    function event_listener(query) {
        const vertical_limesurvey_offset = show_limesurvey_buttons ? height_button : 0;
        if (query.matches) {
            // setup mobile view
            viewBox_width = width_questions;
            if (show_categories) {
                main_g.transition().attr("transform", `translate(0, 0)`);
            } else {
                main_g.transition().attr("transform", `translate(${-width_categories}, 0)`);
            }
            // move to make space for button
            structure_yesno.attr("transform", `translate(${width_categories}, ${y_question + 40})`);
            structure_sentiment.attr("transform", `translate(${width_categories}, ${y_question + 40})`);
            structure_tabs.attr("transform", `translate(${width_categories}, 40)`);
            limesurvey_buttons.attr("transform", `translate(${width_categories + width_button}, 0)`);
            // show button
            category_toggle.attr("display", null);
        } else {
            // setup desktop view
            viewBox_width = width_categories + width_questions;
            main_g.attr("transform", "translate(0, 0)");
            // move back to top
            structure_yesno.attr("transform", `translate(${width_categories}, ${y_question + vertical_limesurvey_offset})`);
            structure_sentiment.attr("transform", `translate(${width_categories}, ${y_question + vertical_limesurvey_offset})`);
            structure_tabs.attr("transform", `translate(${width_categories}, ${vertical_limesurvey_offset})`);
            limesurvey_buttons.attr("transform", `translate(${width_categories}, 0)`);
            // hide button
            category_toggle.attr("display", "none");
        }
        set_svg_size()
    }
}

main();
