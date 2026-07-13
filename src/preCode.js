document.querySelectorAll('pre[data-line-numbers="true"]').forEach((pre) => {
    const code = pre.querySelector("code");
    if (!code) return;

    const lines = code.textContent.split("\n");
    if (lines[lines.length - 1 === ""]) lines.pop();

    const wrapper = document.createElement("div");
    wrapper.className = "line-numbers-wrapper";

    lines.forEach((line, index) => {
        const row = document.createElement("div");
        row.className = "code-line";

        // const num = document.createElement("span");
        // num.className = "line-number";
        // num.textContent = index + 1;

        // const content = document.createElement("span");
        // content.className = "code-content";
        // content.textContent = line || "";
        row.textContent = line || "";

        // row.appendChild(num);
        // row.appendChild(content);
        wrapper.appendChild(row);
    });

    code.innerHTML = "";
    code.appendChild(wrapper);
});
