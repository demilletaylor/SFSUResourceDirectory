<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>p5.js Link Hover Underline Effect</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            flex-direction: column;
        }
        .link-container {
            position: relative;
            display: inline-block;
            margin: 10px;
        }
        .link {
            text-decoration: none;
            color: #000;
            font-size: 24px;
        }
    </style>
</head>
<body>
    <div class="link-container">
        <a href="#" class="link">Hover over me</a>
    </div>
    <div class="link-container">
        <a href="#" class="link">Hover over longer text</a>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
    <script>
        let links = [];
        let underlineX = 0;

        function setup() {
            let linkElements = document.querySelectorAll('.link');
            linkElements.forEach((linkElement, index) => {
                let linkRect = linkElement.getBoundingClientRect();
                links.push({
                    element: linkElement,
                    x: linkRect.left,
                    y: linkRect.top + linkRect.height + 5, // Positioning underline below the text
                    width: linkRect.width,
                    hovering: false
                });
                linkElement.addEventListener('mouseenter', () => links[index].hovering = true);
                linkElement.addEventListener('mouseleave', () => links[index].hovering = false);
            });

            let canvas = createCanvas(windowWidth, windowHeight);
            canvas.position(0, 0);
            canvas.style('pointer-events', 'none'); // Allow mouse events to pass through
        }

        function draw() {
            clear();
            links.forEach(link => {
                if (link.hovering) {
                    underlineX += 5;
                    if (underlineX > link.width) {
                        underlineX = link.width;
                    }
                } else {
                    underlineX -= 5;
                    if (underlineX < 0) {
                        underlineX = 0;
                    }
                }
                strokeWeight(2);
                stroke(0);
                line(link.x, link.y, link.x + underlineX, link.y);
            });
        }
    </script>
</body>
</html>
