const drawings = {
    1: {
        img: "Media/aroo1.png",
        desc: 'The first (official) Aroostook! I decided to draw Aroostook driving, since that seemed more intresting than if he were just standing there. Wait, do you use "standing" for cars? Sitting? Idling?'
    },
    2: {
        img: "Media/aroo2.png",
        desc: "I drew the second Aroostook driving pretty fast. His wheels are even lifted off the ground and everything. Slow down!"
    },
    3: {
        img: "Media/aroo3.png",
        desc: "Yes, Aroostook can sit down now. I decided. He's a cartoon car, he can do whatever the heck he wants!"
    },
    4: {
        img: "Media/aroo4.png",
        desc: "This is the first time I've drawn Aroostook with his eyes closed. It was fun to try something new! Anyway, I drew him singing as well. Though that might not sound good because he's a car and his singing would just be a series of honks. But let's not tell him that."
    },
    5: {
        img: "Media/aroo5.png",
        desc: "I am a huge bird lover, so I had to draw Aroostook with at least one bird. I am sure I'll do this more in the future. The bird on top of his head in this drawing is a western bluebird."
    },
    6: {
        img: "Media/aroo6.png",
        desc: "A confident Aroo. I imagine he's pointing onward determinedly, but it could also be interpreted as him shaking his tire/fist at the sky. Your pick."
    },
    7: {
        img: "Media/aroo7.png",
        desc: 'I make Aroostooks in batches, so sometimes you can see my train of thought between them. The last one was Aroostook pointing confidently, even a little angrily, so I drew this one where he seems to be going "Look, over there!"'
    },
};


function goToDrawing() {
    const id = document.getElementById("inputbox").value;
    if (id) {
        window.location.href = `drawings.html?id=${id}`;
    }
}
function goToDrawingById(id) {
    if (id) {
        window.location.href = `drawings.html?id=${id}`;
    }
}

function getCurrentId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"), 10);
}
function previousDrawing() {
    const currentId = getCurrentId();
    goToDrawingById(currentId - 1);
}

function nextDrawing() {
    const currentId = getCurrentId();
    goToDrawingById(currentId + 1);
}

function randomDrawing() {
    const maxId = Object.keys(drawings).length;
    const randId = Math.floor(Math.random() * maxId) + 1;
    goToDrawingById(randId);
    console.log(randId);
}


window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const drawingcontainer = document.getElementById("drawing");
    const textcontainer = document.getElementById("text");
    const currentIdElem = document.querySelector(".currentid");
    if (drawingcontainer) {
        if (id && drawings[id]) {
            currentIdElem.textContent = `Drawing ID: ${id}`;
            drawingcontainer.innerHTML = `<img src="${drawings[id].img}" alt="Drawing ${id}" id="chosendrawing">`;
            textcontainer.innerHTML = `<p class="chosendesc">${drawings[id].desc}</p>`;
        } else {
            currentIdElem.textContent = `Drawing ID: ${id}`;
            drawingcontainer.innerHTML = `
            <img src="Media/arooconfused.png" alt="A confused Aroostook." id="noidimage">`;
            textcontainer.innerHTML =
            `<p class="noidtext">There's no drawing listed with the ID ${id}.</p>`;
        }
        if (id < 1) {
            currentIdElem.textContent = `Drawing ID: ${id}`;
            drawingcontainer.innerHTML = `
            <img src="Media/arooconfused.png" alt="A confused Aroostook." id="noidimage">`;
            textcontainer.innerHTML =
            `<p class="noidtext">You silly, there aren't negative IDs!</p>`;
        }
    }
};