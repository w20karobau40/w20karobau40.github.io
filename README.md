---

http://heinrtob.pages.fraunhofer.de/visualisierung-karobau40

[Learn more about GitLab Pages](https://pages.gitlab.io) or read the the [official GitLab Pages documentation](https://docs.gitlab.com/ce/user/project/pages/).

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [GitLab CI](#gitlab-ci)
- [Using Jekyll locally](#using-jekyll-locally)
- [GitLab User or Group Pages](#gitlab-user-or-group-pages)
- [Other examples](#other-examples)
- [Troubleshooting](#troubleshooting)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## GitLab CI

This project's static Pages are built by [GitLab CI][ci], following the steps
defined in [`.gitlab-ci.yml`](.gitlab-ci.yml):

```
image: ruby:2.3

variables:
  JEKYLL_ENV: production

pages:
  script:
  - bundle install
  - bundle exec jekyll build -d public
  artifacts:
    paths:
    - public
  only:
  - master
```

## Using Jekyll locally

To work locally with this project, you'll have to follow the steps below:

1. Fork, clone or download this project
1. [Install][] Jekyll
1. Download dependencies: `bundle`
1. Build and preview: `bundle exec jekyll serve`
1. Add content

The above commands should be executed from the root directory of this project.

Read more at Jekyll's [documentation][].

## GitLab User or Group Pages

To use this project as your user/group website, you will need one additional
step: just rename your project to `namespace.gitlab.io`, where `namespace` is
your `username` or `groupname`. This can be done by navigating to your
project's **Settings**.

Read more about [user/group Pages][userpages] and [project Pages][projpages].

## Other examples

* [jekyll-branched](https://gitlab.com/pages/jekyll-branched) demonstrates how you can keep your GitLab Pages site in one branch and your project's source code in another.
* The [jekyll-themes](https://gitlab.com/groups/jekyll-themes) group contains a collection of example projects you can fork (like this one) having different visual styles.

## Troubleshooting

1. CSS is missing! That means two things:
    * Either that you have wrongly set up the CSS URL in your templates, or
    * your static generator has a configuration option that needs to be explicitly
    set in order to serve static assets under a relative URL.

[ci]: https://about.gitlab.com/gitlab-ci/
[Jekyll]: http://jekyllrb.com/
[install]: https://jekyllrb.com/docs/installation/
[documentation]: https://jekyllrb.com/docs/home/
[userpages]: https://docs.gitlab.com/ce/user/project/pages/introduction.html#user-or-group-pages
[projpages]: https://docs.gitlab.com/ce/user/project/pages/introduction.html#project-pages
