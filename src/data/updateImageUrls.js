import { promises as fs } from 'fs';

// 读取文件
try {
    const data = await fs.readFile('cards.ts', 'utf8');

    // 使用正则表达式替换 imageUrl，并补满五位数
    const updatedData = data.replace(/imageUrl: '\/img\/GeneticApex\/(\d+)\.webp'/g, (match, p1) => {
        const idString = String(p1).padStart(5, '0'); // 补足5位数
        return `imageUrl: '/img/GeneticApex/GeneticApex_10_${idString}.webp'`;
    });

    // 将修改后的内容写回文件
    await fs.writeFile('cards.ts', updatedData, 'utf8');
    console.log('文件更新成功！');
} catch (err) {
    console.error('错误:', err);
}