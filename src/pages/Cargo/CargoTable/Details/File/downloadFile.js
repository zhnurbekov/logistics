export default function download(data) {
  let element = document.createElement('a');
  document.body.appendChild(element);
  element.style.display = 'none';

  let blob = new Blob([data], { type: 'octet/stream' });
  let url = window.URL.createObjectURL(blob);
  element.href = url;
  element.download = data.name;
  element.click();
  window.URL.revokeObjectURL(url);
}
