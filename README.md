# Deepshikha · Portfolio

A plain HTML/CSS/JS portfolio. No frameworks, no build step: edit a file, push, and GitHub Pages updates the site.

## Folder structure

```
index.html                  ← the home page (all sections live here)
case-studies/_template.html ← copy this for each new case study
assets/css/style.css        ← colours, fonts, spacing
assets/js/main.js           ← rotating headline, work filters, toolkit tabs
assets/Deepshikha_Resume.pdf
assets/favicon.svg
.nojekyll                   ← tells GitHub Pages to serve files as-is
```

## Publish on GitHub Pages (one time)

1. Create a new repository on GitHub. Naming it `<your-username>.github.io` gives you the cleanest URL: `https://<your-username>.github.io`. Any other name works too and becomes `https://<your-username>.github.io/<repo-name>`.
2. Upload everything in this folder to the repo, either by dragging the files into GitHub's "Add file → Upload files" page or with git:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. Wait a minute or two, then refresh that page; your live URL appears at the top.

After that, every push to `main` updates the live site automatically.

## Everyday edits

All text is plain HTML in `index.html`. Search for `EDIT:` comments to find the spots that still need your input.

- **Still to fill in:** replace `[Company]` (3 places) with your new employer, and the `[Teardown: …]` placeholder in Product thinking.
- **Change a role or add a new one:** each role in Journey is a `<details>` block. Copy one, paste it at the top, and change the text. Adding `open` to the tag shows it expanded by default.
- **Rotating headline words:** edit `data-words="product, customers, impact"` in the hero.
- **Accent colour:** change `--accent` at the top of `assets/css/style.css`.
- **Update your resume:** replace `assets/Deepshikha_Resume.pdf` with a new file of the same name.
- **"Now" section:** edit the list and the "Updated" date.

## Adding a case study

1. Copy `case-studies/_template.html` to a new name, e.g. `case-studies/tripgenie.html`, and fill in the brackets.
2. In `index.html`, find the matching card in the Work section. Change its opening `<div` to `<a href="case-studies/tripgenie.html"` and its closing `</div>` to `</a>`.
3. Replace `<span class="work-more soon">Write-up coming soon</span>` with
   `<span class="work-more">Read case study <span class="arrow">→</span></span>`.

To add a brand new card, copy an existing one. Set `data-kind="field"` for a field story or `data-kind="project"` for a project so the filter buttons pick it up.

## Publishing a Product thinking piece

Write it as a new page (you can reuse the case study template layout) or post it on LinkedIn or Medium. Then in `index.html` change that row's `<div class="list-row">` to `<a class="list-row" href="LINK">`, close it with `</a>`, and replace "Planned" with the date.

## Preview locally

Open `index.html` in a browser. Or, from this folder, run `python3 -m http.server` and visit `http://localhost:8000`.
