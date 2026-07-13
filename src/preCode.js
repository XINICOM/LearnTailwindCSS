document.querySelectorAll('pre[data-line-numbers="true"]').forEach((pre) => {
    const code = pre.querySelector("code");
    if (!code) return;

    const lines = code.textContent.split("\n");
    if (lines[lines.length - 1 === ""]) lines.pop();

    const wrapper = document.createElement("div");
    wrapper.className = "line-numbers-wrapper";

    lines.forEach((line, index) => {
        const row = document.createElement("div");
        row.className = "pre-code-line";

        row.textContent = line || "";

        wrapper.appendChild(row);
    });

    code.innerHTML = "";
    code.appendChild(wrapper);
});
