# BiroAgent preview

This is the conversion rewrite of biroagent.ro (CAEN deadline + 79 RON pack).

## Open in Cursor

```bash
git clone https://github.com/mrmaybacher/biroagent-preview.git
cd biroagent-preview
python3 -m http.server 8765
```

Then open http://127.0.0.1:8765 on the same machine.

Full production HTML/JS is large. If `index.html` is missing from this commit, drop the files from `biroagent-preview.zip` into this folder and push.
