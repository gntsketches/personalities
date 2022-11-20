export function copyToClipboard(copyText) {
  navigator.clipboard.writeText(copyText).then(() => {
    alert("Personality copied to clipboard");
  });
}

export function download(file) {
  const link = document.createElement("a");
  const url = URL.createObjectURL(file);

  link.href = url;
  link.download = file.name;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
