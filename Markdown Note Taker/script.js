const input = document.getElementById('markdown-input');
const preview = document.getElementById('preview');
const downloadBtn = document.getElementById('downloadBtn');

const updatePreview = () => {
    const rawValue = input.value;
    marked.setOptions({
        breaks: true,
        gfm: true
    });
    preview.innerHTML = marked.parse(rawValue);
};

input.addEventListener('input', updatePreview);

downloadBtn.addEventListener('click', () => {
    const content = input.value;
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-note.md';
    a.click();

    URL.revokeObjectURL(url);
});

updatePreview();