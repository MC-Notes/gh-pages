# Comment on Github
How does api work to put a comment on pull request from executing the notebook:
 - Files missing?
 - Execution output from running the notebook.
 - problems with metadata?
 - on pull request try to upload to zenodo sandbox, fail if not working (see metadata problems).
 - on accept upload to zenodo directly using exactly the same routine as in zenodo sandbox above.
 
# Zenodo publish using API
using python requests to upload to zenodo using given metadata.

# run travis script
- Find out how to get python errors and report them to github


# References
 - Use Calysto:
   * document-tools
   * provides make references
   * references are created using [CITE](#cite-<bibtex_cite_key)
   * creates #References cell at bottom of notebook
   * installation: https://github.com/Calysto/notebook-extensions
   * Drawbacks: 
     bibtex entries have to be inside the notebook, no external bibtex allowed
     no search functionality for bibtex entries
     have to install whole calysto project (users & when running notebook)

 - Make subtype of calysto:
   * Can make references from external file
   * make light-weight install available for document tools
   * include search for references
   * include nbconvert latex reference for pdf creation

This allows to create pdf in travis

# Testing

How to run notebooks on travis?
Idea:
 1. Install requirements (including languages)
 2. Run notebook all the way through
   - push comment on pull request, showing failure, if it happens
   - push comment on pull request, showing success (maybe ok just with travis api)
 3. If pull is excepted, run the notebook and upload an executed_notebook.ipynb to the folder. This is also to make sure to only run any notebook only once. This notebook will be the notebook with the associated DOI, not the one added by the user!

# Comments & Corrections

Put comments directly into notebook? 
 - Comment like done in https://github.com/MC-Notes/Issue1/pull/1
    This allows for corrections to be done directly by the next commit.
 - Have commenting/suggestion mode on notebook
    This would be a commit by the reviwers, changing the notebook.
    Would require the user to download the branch again.
 - Jupyterhub for multiuser edits on the notebook, if it runs through the travis tests.
    Will be unclear how interactions will be documented to github. Would have to be something like a commit button on the notebook, committing edits to the pull request.

# Questions to resolve

1. DOIs: Do we get a DOI per issue (i.e. repo) or per article (i.e. PR)? I suspect the answer is per repo since you get a DOI per release. We need one DOI per paper, not per repo. How should we arrange the journal so we can get a DOI per article?
 - It seems with the api https://zenodo.org/dev you can actually upload so called depositions yourself. 
 - It can be automized through travis as well, uploading and publishing when the pull request is accepted.
2. How to launch the notebook on Azure? SageMathCloud? Other?
 - https://blogs.technet.microsoft.com/machinelearning/2015/07/24/introducing-jupyter-notebooks-in-azure-ml-studio/  ?
 
 # Acceptance
 1. Have issue raised after pull request with comments etc. 
 2. Issue closed means accepted note.
 3. Write email to mike for adding in neil.
