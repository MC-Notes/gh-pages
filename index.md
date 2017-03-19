---
layout: page
title: "Monatliche Correspondenz: Notes"
---

## Volumes ##
{% for repository in site.github.public_repositories %}
    {% if repository.name != 'mc-notes.github.io' and repository.has_pages %}
<div class="button-table">
<a href="{{ repository.name | prepend: site.baseurl }}" class="button button-ghost" role="button">{{ repository.name }}</a>
</div>
```yaml
{
{% for i in repository %}
  {{ i[0] }} = {{ i[1] }},
{% endfor %}
}
```
    {% endif %}
{% endfor %}