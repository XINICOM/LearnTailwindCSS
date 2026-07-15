const CONFIG = {
    tags: ["h1", "h2", "h3"],
    tocContainer_ID: "toc",
    content_Attribute: "tocSource",
};

const container = document.getElementById(CONFIG.tocContainer_ID);
document
    .querySelectorAll(`article[${CONFIG.content_Attribute}]`)
    .forEach((content) => {
        if (!container || !content) return;

        const headers = content.querySelectorAll(CONFIG.tags.join(","));
        if (!headers) return;

        let tocHTML = "";
        headers.forEach((h, index) => {
            let id = h.id;
            if (!id) {
                id = h.textContent
                    .trim()
                    .toLowerCase()
                    .replace(/[^\w\u4e00-\u9fa5]+/g, "-")
                    .replace(/^-+|-+$/g, "");
                if (!id) id = `section-${index}`;
                h.id = id;
            }

            let baseIndent = 1;
            CONFIG.tags.forEach((x) => {
                const tagIndent = parseInt(x.substring(1), 10);
                if (tagIndent > baseIndent) baseIndent = tagIndent;
            });
            const indent =
                parseInt(h.tagName.substring(1), 10) - baseIndent + 1;

            tocHTML += `<div class="toc-item level${indent}"><a href="#${id}">${h.textContent.trim()}</a><div>`;
        });
        container.innerHTML = tocHTML;
    });
