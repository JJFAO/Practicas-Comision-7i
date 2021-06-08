export function getBase64(img) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => resolve(reader.result));
        reader.readAsDataURL(img);
    });
}

export function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        alert('Solamente archivos JPG/PNG!');
    }
    const isLt2M = file.size / 1024 / 1024 < 3;
    if (!isLt2M) {
        alert('La imagen debe ser menor a 3MB!');
    }
    return isJpgOrPng && isLt2M;
}
