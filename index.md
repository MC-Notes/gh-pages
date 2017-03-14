---
layout: page
title: MC-Notes
subtitle: "Monthly Correspondence: Notes"
---

Despite significant advances in our communication technology, academic
publication retains a model that is over two hundred years old. *Monatliche
Correspondenz* was an early journal which assimilated letters from astronomers
across Europe, and redistributed them in edited form through compiling the
letters into volumes. Franz von Zach, the Hungarian astronomer performed the
editing. In 1801 issues of *Monatliche Correspondenz* closely tracked the
discovery, loss and rediscovery of the dwarf planet *Ceres*. It was through
this rediscovery that Carl Friederich Gauss became famous. It was Franz von
Zach himself that was able to recover the planet at the co-ordinates that
Gauss predicted. But perhaps the most remarkable thing about the journal is
that the discovery, loss of the planet, computation of its orbit and its
rediscovery was carried out in a single volume within a single year at a time
when Europe lacked good roads or canals or railways and was engaged in war.
The volumes of Monatliche Correspondenz were presumably transported around
Europe in postal satchels on the back of mules. And yet publication and
communication was able to occur at such rates. Gauss took six weeks to compute
the orbit. He invented a host of techniques to do so, including least squares,
and eventually wrote up these ideas in *Theoria motus* in 1809.

MC Notes is inspired by the observation that many of our publication
processes have actually become slower since then. The original motivation
for publication was *communication*, but after von Zach no other astronomer
was able to perform the enormous labour of editing and collating the letters
and eventually the journal failed. A new model for journal communication
emerged involving peer review and editorial boards. This made journals more
sustainable, and they also began to be used as a form of academic currency.

MC Notes is a reimagining of the journal driven by trying to picture what
von Zach would have done today with access to the modern tools of the
internet. We have tried to create a sustainable model of submission based
around Jupyter notebooks and Github. Our aim is for rapid turn around and
communication of ideas. In a nod to our inspiration, MC Notes is named for
*Monatliche Correspondenze*, with notes attempting to emphasise the
informality of the communication. Work will be peer reviewed using the Github
issues tracker. 

See [How To Submit]({{ '/howto' | prepend: site.baseurl }}) of how to submit to our journal.

<h3>Current open issues for submissions:</h3>
{% for repository in site.github.public_repositories %}
    {% if repository.name != 'mc-notes.github.io' and repository.has_pages %}
<div class="button-table">
<a href="{{ repository.name | prepend: site.baseurl }}" class="button button-ghost" role="button">{{ repository.name }}</a>
</div>
    {% endif %}
{% endfor %}