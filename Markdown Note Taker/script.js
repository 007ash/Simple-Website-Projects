const input = document.getElementById('markdown-input');
const preview = document.getElementById('preview');
const downloadBtn = document.getElementById('downloadBtn');

// 1. Real-time Rendering Logic
const updatePreview = () => {
    const rawValue = input.value;
    // Set options for security and line breaks
    marked.setOptions({
        breaks: true,
        gfm: true
    });
    preview.innerHTML = marked.parse(rawValue);
};

// Listen for typing events
input.addEventListener('input', updatePreview);

// 2. Download Functionality (File Blobs)
downloadBtn.addEventListener('click', () => {
    const content = input.value;
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    
    // Create temporary link and click it
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-note.md';
    a.click();
    
    // Clean up
    URL.revokeObjectURL(url);
});

// Initial placeholder render
updatePreview();