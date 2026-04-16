let currentGame = 'AVIATOR';
        const logMsgs = ["Connecting...", "Bypassing...", "Decoding API...", "Signal Found!"];

        function checkLogin() {
            if(document.getElementById('user').value === "Dg2007avotor" && document.getElementById('pass').value === "y3468#@890Gdasun") {
                document.getElementById('login-section').classList.add('hidden');
                document.getElementById('navbar').classList.remove('hidden');
                document.getElementById('ticker').classList.remove('hidden');
                document.getElementById('main-section').classList.remove('hidden');
                startUserCounter();
            } else { alert("Access Denied!"); }
        }

        function setGame(game, btn) {
            currentGame = game;
            document.querySelectorAll('.g-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('val-display').classList.toggle('hidden', game === 'APPLE');
            document.getElementById('apple-grid').classList.toggle('hidden', game !== 'APPLE');
            document.getElementById('val-display').innerText = "---";
        }

        function showPage(p) {
            document.getElementById('main-section').classList.add('hidden');
            document.getElementById('contact-section').classList.add('hidden');
            document.getElementById(p + '-section').classList.remove('hidden');
        }

        function generate() {
            const btn = document.getElementById('gen-btn');
            const logs = document.getElementById('logs');
            const display = document.getElementById('val-display');
            const beep = document.getElementById('beep-sound');

            btn.disabled = true;
            let i = 0;
            const interval = setInterval(() => {
                logs.innerText = logMsgs[i];
                i++;
                if(i >= logMsgs.length) {
                    clearInterval(interval);
                    finalizeSignal();
                }
            }, 500);

            function finalizeSignal() {
                let finalVal = "";
                if(currentGame === 'APPLE') {
                    const boxes = document.querySelectorAll('.apple-box');
                    // Reset Boxes to numbers
                    for(let j=0; j<boxes.length; j++){
                        boxes[j].innerText = j+1;
                        boxes[j].classList.remove('apple-active');
                    }
                    // Generate new signal
                    let idx = Math.floor(Math.random() * 5);
                    boxes[idx].innerText = "🍎";
                    boxes[idx].classList.add('apple-active');
                    finalVal = "Cell " + (idx + 1);
                } else {
                    finalVal = (Math.random() * (3.8 - 1.1) + 1.1).toFixed(2) + "x";
                    display.innerText = finalVal;
                    display.style.color = (currentGame === 'AVIATRIX') ? "#00d4ff" : "#ff003c";
                }
                const hist = document.getElementById('history-list');
                const newItem = document.createElement('div');
                newItem.className = 'hist-item';
                newItem.innerText = finalVal;
                hist.prepend(newItem);
                
                try { beep.play(); } catch(e) {}
                btn.disabled = false;
            }
        }

        function startUserCounter() {
            setInterval(() => {
                let count = Math.floor(Math.random() * (160 - 110) + 110);
                document.getElementById('user-count').innerText = count;
            }, 5000);
        }
