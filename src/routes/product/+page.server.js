import fs from 'fs';

export async function load() {
    const data = JSON.parse(fs.readFileSync('content/products.json', 'utf-8'));

    console.log(data);
    return data;
};