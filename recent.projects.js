// Array of projects
const projects = [
    {
        title: 'Image Generator',
        timestamp: "2023-12-20T12:00:00",
        description: 'Synthetic training data generation using SDXL and LORA',
        imageSrc: '/assets/img/gan.jpg',
        tools: 'Python, SDXL, LORA',
        accomplishments: [
            'Worked in a small team to create a proof of concept for an image generation model.',
            'Utilized Automatic1111 to run a Stable Diffusion XL model after fine-tuning LORAs for high-quality hyperreal images.'
        ]
    },
    {
        title: 'Primitive Processor',
        timestamp: "2022-03-01T12:00:00",
        description: 'Very Primitive Processor running on DE1-SoC board',
        imageSrc: '/assets/img/Blog-Images-Forget-Machine-Learning-Humans-Still-Have-a-Lot-to-Learn-Part-II.jpg',
        tools: 'Verilog, ARM',
        accomplishments: [
            'Designed a basic processor in Verilog and wrote functional codes to run on the processor.',
            'Applied knowledge of 16-bit registers, multiplexers, FSMs, and more.'
        ]
    },
    {
        title: 'Circuit Detector',
        timestamp: "2023-03-20T12:00:00",
        description: 'Circuit diagram detector using convolutional neural networks model',
        imageSrc: '/assets/img/project-aim_bert-bias.png',
        tools: 'Python, ResNet',
        accomplishments: [
            'Trained an Image Processing model to extract circuit elements from a hand-drawn diagram.',
            'Used a Convolutional Neural Network AutoEncoder with a fixed ResNet50 encoder and trainable decoder.'
        ]
    },
    {
        title: 'Mapping Software',
        timestamp: "2022-03-20T12:00:00",
        description: 'Geographic information system (GIS) using Open Street Map (OSM)',
        imageSrc: '/assets/img/project-blog-logo.jpg',
        tools: 'C++, OpenGL, OSM',
        accomplishments: [
            'Designed a mapping software in C++ using GUIs and raw input map data.',
            'Applied algorithms like simulated annealing and K-opt to solve a specialized traveling salesman problem.'
        ]
    }
];

// Function to create HTML for a project
function createProjectHTML(project) {
    return `
        <div class="col s12 m6 l4">
            <div class="card medium">
                <div class="card-image waves-effect waves-block waves-light">
                    <img alt="${project.title}" src="${project.imageSrc}" style="height: 100%; width: 100%" class="activator" />
                </div>
                <div class="card-content">
                    <span class="card-title activator main-color-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
                    <p>${project.description}</p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
                    <ul>
                        <li><b>Tools:</b> ${project.tools}</li>
                        ${project.accomplishments.map(accomplishment => `<li>${accomplishment}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function displayLatestProject() {
    console.log("hello")
    const recentProjectsDiv = document.getElementById('recent-projects');
    recentProjectsDiv.innerHTML = createProjectHTML(projects.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).shift());
}

function displayMoreProjects() {
    const recentProjectsDiv = document.getElementById('recent-projects');
    recentProjectsDiv.innerHTML += createProjectHTML(projects.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).shift());
}

document.getElementById('load-more').addEventListener('click', displayMoreProjects);

displayLatestProject();
