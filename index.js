(() => {
    document.addEventListener('DOMContentLoaded', function() {
        console.log("Hello!");
        
        addCard({
            title: "Sphere",
            description: "움직이는 동그라미 입니다.",
            renderContent: () => {
                const canvas = document.createElement("canvas");
                drawSphere(canvas.getContext("2d"), 100, 100, 0, 10);
                return canvas;
            }
        });
    });
    
    function addCard({title, description, renderContent}) {
        const div = document.createElement("div");

        const titleElement = document.createElement("h2");
        titleElement.innerHTML = title;

        const descriptionElement = document.createElement("p");
        descriptionElement.innerHTML = description;

        const contentElement = renderContent();

        div.appendChild(titleElement);
        div.appendChild(descriptionElement);
        div.appendChild(contentElement);
        
        const container = document.querySelector(".container");
        container.appendChild(div);
    }
})();