
let currentUser = null;
    let allComments = [];
    const STORAGE_COMMENTS_KEY = "dgmodz_comments";
    const STORAGE_USER_KEY = "dgmodz_current_user";
    const LOCAL_USERS_KEY = "dgmodz_local_users"; 
    
    const audio = new Audio('https://cloud.laksidunimsara.com/f/nimsara/1776173132746-original_sound_-_edmlove08_musicaldown.com_1774571955.mp3');
    audio.loop = true;
    let musicOn = false;

    const apps = [
        { name: "Lightroom Mode", image: "https://files.catbox.moe/r1yfad.jpg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/Adobe%20Lightroom/Adobe_Lightroom_v11.2.2.xapk" },
        { name: "Whatsapp Mode", image: "https://files.catbox.moe/4m3q13.jpg", desc: "DG MODZ STORE ©️", link: "https://www.mediafire.com/file/vb1suosqsvko5lk/MOD_WA_APK_%252B_ACTIVATOR_APK_%255BRW009%255D_%25F0%259F%2592%25A4_PTD_KING_MODZ.zip/file" },
        { name: "Venice Mode", image:"https://files.catbox.moe/tr7i8k.png", desc: "DG MODZ STORE ©️", link: "https://www.mediafire.com/file/6ol85n1zepcwe93/Venice_Ai_2.0_1763971071_latestmodapks.com.apk/file" },
        { name: "Youtube Mode", image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png", desc: "DG MODZ STORE ©️", link: "https://www.mediafire.com/file/ysbjustywaqz3mu/YouTube_Premium_v21.12.525_mod%25282%2529.apk/file" },
        { name: "Spotify Mode", image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/Spotify/Spotify_v9.1.36.1948_MOD.apk" },
        { name: "Instagram Mode", image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg", desc: "DG MODZ STORE ©️", link: "https://www.mediafire.com/file/cd7kp1snwsbnd7x/Inshot_2.196.1529_1770819993_latestmodapks.com.apk/file" },
        { name: "Mediafire Mode", image: "https://files.catbox.moe/5fwyzz.jpg", desc: "DG MODZ STORE", link: "https://www.mediafire.com/file/z1qot149i7yx9r7/com-mediafire-android-200005-66873867-18d9e32d71684e7880e0cbc0effb19bd.apk/file" },
        { name: "Contact Auto Sv", image: "https://files.catbox.moe/oq48rd.jpg", desc: "DG MODZ STORE ©️", link: "https://www.mediafire.com/file/y5yqj5la1mfsc6z/DEXTER_SAVER_FIXED.apk/file" },
       { name: "Telegram Mode", image: "https://files.catbox.moe/azurbc.jpg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/Telegram/Telegram_v12.6.4_MOD.apk" },
       { name: "Aloha Mode", image: "https://files.catbox.moe/zoplsl.jpg", desc: "DG MODZ STORE ©️", link: "https://www.mediafire.com/file/y5zql3ryyrmbqg5/Aloha_v8.1.1_%2528Premium%2529.apk/file" },
      { name: "AutoSv App", image: "https://files.catbox.moe/x6x1mi.jpg", desc: "DG MODZ STORE ©️", link: "https://www.mediafire.com/file/up20qwg0m8inlbv/autosave-contact.apk/file" },
      { name: "Mt Maneger", image: "https://files.catbox.moe/rym9et.jpg", desc: "DG MODZ STORE ©️", link: "https://www.mediafire.com/file/gbjgcwc27jab6sx/bin-mt-plus-23122788-66776205-eb43f1e92515e854d870bfc34c8bdf65.apk/file" },
      { name: "Capcut Mode", image: "https://files.catbox.moe/5o7f0i.jpg", desc: "DG MODZ STORE ©️", link: "https://www.mediafire.com/file/941m457ootljhjz/capcut_APK.apk/file" },
      { name: "FM Whatsapp", image: "https://files.catbox.moe/yjf0m2.jpg", desc: "DG MODZ STORE ©️", link: "https://www.mediafire.com/file/dcph7o333s9h28o/FMWhatsApp-59665478.apk/file" },
      { name: "Netflix Mode", image: "https://files.catbox.moe/srkqz5.jpg", desc: "DG MODZ STORE ©️", link: "https://www.mediafire.com/file/0bzp2gjay0fjm6m/Netflix_Pro_v9.59.1_%2528Premium%2529.apk/file" },
      { name: "Vivacut Mode", image: "https://files.catbox.moe/ycz77a.jpg", desc: "DG MODZ STORE ©️", link: "https://www.mediafire.com/file/uls1bdsfxaq2ed8/Vivacut_4.4.7_1772394824_latestmodapks.com.apk/file" },
      { name: "Termux App", image: "https://files.catbox.moe/lt9rg5.jpg", desc: "DG MODZ STORE ©️", link: "https://www.mediafire.com/file/1jx9whek979cn94/uptodown-com.termux.apk/file" },
      { name: "Picsart Mode", image: "https://www.image2url.com/r2/default/images/1776045024910-c7a6af5c-5b26-435e-ab23-3aff12768456.jpg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/Picsart%20Photo%20Editor/PicsArt_v29.8.xapk" },
      { name: "Yt Music Mode", image: "https://www.image2url.com/r2/default/images/1776046938444-a7938958-ede2-4155-9271-365f80fa9396.jpg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/YouTube%20Music/YouTube_Music_v9.14.53.apk" },
      { name: "Gb Whatsapp", image: "https://www.image2url.com/r2/default/images/1776047372557-a7fc1a8c-58b4-460b-8b83-fe76e5998ca7.jpg", desc: "DG MODZ STORE ©️", link: "https://www.mediafire.com/file/mmr3arxtru1pr9t/com.gbwhatsapp3.zip/file" },
        { name: "Shareit Mode", image: "https://www.image2url.com/r2/default/images/1776047792108-bf727155-7460-4458-92ad-000754fb968b.jpg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/SHAREit/SHAREit_v6.53.88_UD_MOD.apk" },
         { name: "Clock Mode", image: "https://www.image2url.com/r2/default/images/1776048080323-2422e5c7-c4d6-4a4b-82d0-2bf94306e3d3.jpg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/Clock%20Vault/Clok%20Vault%20v29.0%20[Pro].apk" },
         { name: "Shotcut Mode", image: "https://www.image2url.com/r2/default/images/1776054070634-f9dde029-e7bf-4c25-a58f-0f6815c0b07d.jpg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/ShotCut/ShotCut_v3.4.2.xapk" },
         { name: "SnapTube Mode", image: "https://www.image2url.com/r2/default/images/1776054246970-ea18cf51-eb22-49eb-beeb-6828236a78ae.jpg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/SnapTube/Snaptube_v7.57.0.75750110_MOD.apk" },
          { name: "TikTok Mode", image: "https://www.image2url.com/r2/default/images/1776054421198-ffe87c6e-a47d-420f-ae92-39d7d683e168.jpg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/TikTok/TikTok_v44.7.15_MOD.apk" },
          { name: "Mx player Mode", image: "https://i.ibb.co/1fkm3D3g/mx-player-pro-apk-mod-150x150.png", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/Mx%20player/MX_Player_v2.12.0.apk" },
           { name: "Photoroom Mode", image: "https://i.ibb.co/b5VZgg3j/photoroom-background-remover-photo-editor-150x150.jpg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/PhotoRoom/PhotoRoom_v2026.15.02.xapk" },
           { name: "Canva Mode", image: "https://i.ibb.co/KxCmf2LB/canva-graphic-design-video-collage-logo-maker-150x150.jpg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/Canva/Canva_v2.356.0.xapk" },
            { name: "Remini Mode", image: "https://i.ibb.co/bgFnV1LS/remini-apk-mod-150x150.png", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/Remini/Remini_v3.7.1306.202520542.xapk" },
             { name: "Lark Player Mode", image: "https://i.ibb.co/tM5d3fDQ/music-player-mp3-player-lark-player-150x150.jpg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/Lark%20Player/Lark_Player_v2026.4.7_MOD.apk" },
             { name: "Pixelcut Mode", image: "https://i.ibb.co/ZRvq7XcG/pixelcut-ai-graphic-designer-150x150.png", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/Pixelcut/Pixelcut_v0.9.43.xapk" },
            { name: "Playit Mode", image: "https://i.ibb.co/PGFkSYmV/playit-150x150.png", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/PLAYit/PLAYit_v2.7.47.39_MOD.apk" },
            { name: "Alight Motion Mode", image: "https://i.ibb.co/HLNTT6XX/alight-motion-video-and-animation-editor-150x150.jpg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/Alight%20Motion/Alight_Motion_v5.0.273.1028417_MOD.apk" },
            { name: "Poster Maker Mode", image: "https://i.ibb.co/Xr7XKsYz/poster-maker-flyer-maker-150x150.jpg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/Poster%20Maker/Poster_Maker_v171.0_MOD.apk" },
             { name: "Car Parking Multiplayer Mode", image: "https://i.ibb.co/bR333Wj9/car-parking-multiplayer-2-150x150.jpg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/Car%20Parking%20Multiplayer%202/Car_Parking_Multiplayer_2_v1.3.1.3.xapk" },
             { name: "Path to Nowhere Mode", image: "https://i.ibb.co/rK47RwfM/path-to-nowhere-150x150.png", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/Path%20to%20Nowhere/Path_to_Nowhere%20v1.6.44.0.xapk" },
             { name: "Sony LIV Mode", image: "https://i.ibb.co/JwvL0W7j/sonyliv-mod-apk-150x150.png", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/SonyLIV/SonyLIV_v6.30.10.xapk" },
             { name: "Pixel 4D Live Wallpapers Mode", image: "https://i.ibb.co/5bCVpW9/pixel-4d-live-wallpapers-150x150.jpg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/Pixel%204D%20Live%20Wallpapers/Pixel_4D_v3.4.8.1.xapk" },
             { name: "SnapChat Mode", image: "https://i.ibb.co/vSxGHbP/snapchat-150x150.jpg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/Snapchat/Snapchat_v13.88.0.40_Beta.xapk" },
             { name: "Audio Editor Mode", image: "https://i.ibb.co/Zpm7bBty/Screenshot-20260413-190722-Google-Play-Store.jpg", desc: "DG MODZ STORE ©️", link: "https://files.modyolo.com/Audio%20Editor/Audio_Editor_v2.01.53.0408_MOD.apk" },
             { name: "Wp Num UnBan Apk", image: "https://i.ibb.co/My86mGzQ/caa15716e3f4eca547a6ae3e8e58f367.jpg", desc: "DG MODZ STORE ©️", link: "https://www.mediafire.com/file/p2gogkrlkz58kau/%25F0%259D%2590%2583%25CE%25B1%25D1%2595%25D1%2595%25CE%25B1_%25F0%259D%2590%258D%25CF%2585%25D0%25BC%25D0%25B2%25D1%2594%25D1%258F_%25F0%259D%2590%2594%25CE%25B7%25D0%25B2%25CE%25B1%25CE%25B7%25D1%2594%25E2%2588%2582_%25F0%259D%2590%2580%25CF%2581%25D0%25BA.7z/file?dkey=txt8sjsopsk&r=1923" },
             { name: "Terabox mode", image: "https://i.ibb.co/tPYv8LJZ/terabox-cloud-storage-space-150x150.jpg", desc: "DG MODZ STORE ©️", link: "https://files-2.modyolo.com/TeraBox/TeraBox_v4.15.5.xapk" },
             { name: "Video Convater mode", image: "https://www.image2url.com/r2/default/images/1776216661343-fee6c7c1-60a7-49d3-9b7c-497fc3a64072.png", desc: "DG MODZ STORE ©️", link: "https://files-2.modyolo.com/Video%20Converter%20Compressor/Video_Converter_Compressor_v19.2.0.apk" },
             { name: "Grok Ai mode", image: "https://www.image2url.com/r2/default/images/1776216816558-a2a287a9-2ff5-49e1-9c17-e524764dfb5c.webp", desc: "DG MODZ STORE ©️", link: "https://files-2.modyolo.com/Grok/Grok_v1.1.52_release.00.xapk" },
             { name: "Fotir Photo Editor mode", image: "https://www.image2url.com/r2/default/images/1776217053429-887068f0-618e-44c3-9b10-1778d1e91027.png", desc: "DG MODZ STORE ©️", link: "https://files-2.modyolo.com/Fotor%20Photo%20Editor/Fotor_Photo_Editor_v8.1.15.0.xapk" },
              { name: "Internet Speed Monitor Mode", image: "https://www.image2url.com/r2/default/images/1776217244124-345235db-fdbe-488f-bc60-7da505624fee.png", desc: "DG MODZ STORE ©️", link: "https://files-2.modyolo.com/Internet%20Speed%20Monitor/Internet_Speed_Monitor_v1.1.3-modyolo.apk" },
             { name: "Wp Bug Apk", image: "https://www.image2url.com/r2/default/images/1776218244569-7fae1f31-fc47-445c-b97a-fde1cd78926f.jpg", desc: "DG MODZ STORE ©️", link: "https://www.mediafire.com/file/qhlb2ytatmp1jnz/CatalystV1.apk/file" },
             { name: "Wp Ban Apk", image: "https://www.image2url.com/r2/default/images/1776219015754-d24b0ced-802a-4306-b816-663334472802.jpg", desc: "DG MODZ STORE ©️ password = PSYCHO123", link: "https://www.mediafire.com/file/ju7zwe40hnvakxl/%E2%88%A9%E2%94%90%E2%95%9B%CF%80%C3%B9%C3%BF%CE%B5%C3%85%C2%A5%CF%80%C3%B9%C3%BF%CE%B5%C2%A2%C2%A5%CF%80%C3%B9%C3%BF%CE%B5%E2%94%82%C2%A5%CF%80%C3%B9%C3%BF%CF%86%C2%A2%C2%A5%CF%80%C3%B9%C3%BF%CF%86%C2%BB%C2%A5%CF%80%C3%B9%C3%BF%CE%B5%C3%AF%C2%A5%CE%93%C3%87%C3%87%CF%80%C3%B9%C3%BF%CF%86%C3%B9%C2%A5%CF%80%C3%B9%C3%BF%CF%86%C3%B4%C2%A5%CF%80%C3%B9%C3%BF%CE%B5%C3%A7%C2%A5%CF%80%C3%B9%C3%BF%CE%B5%C3%A7" },
              { name: "Wp Ban Apk", image: "https://www.image2url.com/r2/default/images/1776219797036-33c6a78e-0bb6-4667-9c9a-0b7d20f6a5f7.jpg", desc: "DG MODZ STORE ©️", link: "https://www.mediafire.com/file/tbpcgtw0sv55s55/%25C5%25BE%25E0%25B9%258F%25C3%25BD%25E0%25B8%25A5_%25CF%2581%25E0%25B8%25A3%25C3%25BD%25C2%25A2%25D1%2592%25E0%25B9%258F_1.0_r.apk/file" },
              { name: "Phone Reset Virus", image: "https://www.image2url.com/r2/default/images/1776220780539-8f82b93b-cc74-4a15-b384-859ccbfc3fc9.jpg", desc: "DG MODZ STORE ©️", link: "https://www.mediafire.com/file/ewly9rsnwjm252j/ALPHA_X10_1.0_r.apk/file" },
            
    ];

    function isValidPassword(pwd) {
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pwd);
    }

    function getLocalUsers() {
        const users = localStorage.getItem(LOCAL_USERS_KEY);
        return users ? JSON.parse(users) : [];
    }
    function saveLocalUsers(users) { localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users)); }

    function registerUser(username, email, password) {
        let users = getLocalUsers();
        if (users.find(u => u.email === email)) return { success: false, error: "Email already registered!" };
        if (!isValidPassword(password)) return { success: false, error: "Password must contain letters & numbers, minimum 8 characters." };
        const newUser = {
            email: email,
            password: btoa(password), 
            name: username,
            picture: `https://ui-avatars.com/api/?background=ff4d4d&color=fff&name=${encodeURIComponent(username)}&bold=true`,
            authType: 'local'
        };
        users.push(newUser);
        saveLocalUsers(users);
        return { success: true, userData: { email, name: username, picture: newUser.picture, sub: email, authType: 'local' } };
    }

    function loginUser(email, password) {
        const users = getLocalUsers();
        const found = users.find(u => u.email === email && atob(u.password) === password);
        if (!found) return { success: false, error: "Invalid email or password." };
        return { success: true, userData: { sub: found.email, name: found.name, email: found.email, picture: found.picture, authType: 'local' } };
    }

    function updateLocalUser(email, updates) {
        let users = getLocalUsers();
        const idx = users.findIndex(u => u.email === email);
        if (idx !== -1) {
            users[idx] = { ...users[idx], ...updates };
            saveLocalUsers(users);
            if (currentUser && currentUser.email === email) {
                currentUser = { ...currentUser, ...updates };
                localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(currentUser));
                renderAccountPage();
            }
        }
    }

    function changeLocalUserPassword(email, oldPassword, newPassword) {
        let users = getLocalUsers();
        const user = users.find(u => u.email === email);
        if (!user || atob(user.password) !== oldPassword) return { success: false, error: "Old password is incorrect." };
        if (!isValidPassword(newPassword)) return { success: false, error: "New password must contain letters & numbers, min 8 chars." };
        user.password = btoa(newPassword);
        saveLocalUsers(users);
        return { success: true };
    }

    function showSlides() {
        let slides = document.getElementsByClassName("slides");
        for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        if(slides[slideIndex-1]) slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 5000);
    }
    let slideIndex = 0;
    function toggleVideoSound(container) { const vid = container.querySelector('video'); vid.muted = !vid.muted; const msg = container.querySelector('p'); msg.innerText = vid.muted ? "Click for sound 🔊" : "Sound ON 🎵"; }
    function displayApps(filtered) { const container = document.getElementById("appList"); if(!container) return; container.innerHTML = ""; filtered.forEach((app, index) => { const card = document.createElement('div'); card.className = 'app-card'; card.style.animationDelay = `${index * 0.1}s`; card.innerHTML = `<img src="${app.image}" alt="${app.name}"><h3>${app.name}</h3><p style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:12px; font-weight:700;">${app.desc}</p><a href="${app.link}" class="download-btn">Download</a>`; container.appendChild(card); }); }

    document.getElementById('menuToggleBtn').addEventListener('click', () => { document.getElementById('mainNav').classList.toggle('show'); });
    function bindNavEvents() { document.querySelectorAll('.nav-btn').forEach(btn => { btn.addEventListener('click', (e) => { const page = btn.getAttribute('data-page'); if(page) { switchPage(page); document.getElementById('mainNav').classList.remove('show'); } }); }); }
    function switchPage(pageId) { document.querySelectorAll('.page').forEach(page => page.classList.remove('active-page')); const targetPage = document.getElementById(`${pageId}Page`); if(targetPage) targetPage.classList.add('active-page'); document.querySelectorAll('.nav-btn').forEach(btn => { btn.classList.toggle('active', btn.getAttribute('data-page') === pageId); }); if(pageId === 'store') displayApps(apps); if(pageId === 'comments') renderCommentsUI(); if(pageId === 'account') renderAccountPage(); }
    function loadCommentsFromLocal() { const stored = localStorage.getItem(STORAGE_COMMENTS_KEY); if(stored) allComments = JSON.parse(stored); allComments.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp)); }
    function saveCommentsToLocal() { localStorage.setItem(STORAGE_COMMENTS_KEY, JSON.stringify(allComments)); }
    
    function updateUIBasedOnAuth() {
        const commentsWrapper = document.getElementById("commentSectionWrapper");
        const loginGateDiv = document.getElementById("commentsLoginGate");
        const menuLoginBtn = document.getElementById("menuLoginBtn");
        if(currentUser) {
            if(commentsWrapper) commentsWrapper.style.display = "block";
            if(loginGateDiv) loginGateDiv.innerHTML = "";
            if(menuLoginBtn) menuLoginBtn.style.display = "none";
        } else {
            if(commentsWrapper) commentsWrapper.style.display = "none";
            if(loginGateDiv) loginGateDiv.innerHTML = `<div class="info-card"><h3>Login to comment</h3><div id="googleButtonPlaceholder"></div><p style="margin-top:15px;"><i class="fas fa-envelope"></i> Or use Email Login via LOGIN button</p></div>`;
            renderGoogleLoginButtonInGate();
            if(menuLoginBtn) menuLoginBtn.style.display = "block";
        }
    }
    function renderGoogleLoginButtonInGate() { const placeholder = document.getElementById("googleButtonPlaceholder"); if(placeholder && typeof google !== 'undefined') { google.accounts.id.renderButton(placeholder, { theme: "outline", size: "medium", shape: "pill" }); } }
    function handleCredentialResponse(response) { const payload = parseJwt(response.credential); currentUser = { sub: payload.sub, name: payload.name, email: payload.email, picture: payload.picture, authType: 'google' }; localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(currentUser)); updateUIBasedOnAuth(); renderAccountPage(); document.getElementById('mainNav').classList.remove('show'); switchPage('account'); }
    function parseJwt(token) { return JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))); }
    function initGoogleLogin() { if(typeof google !== 'undefined') { google.accounts.id.initialize({ client_id: "1047323012515-go8qg4r4iqcoa55gtkvc969er4c8h5c6.apps.googleusercontent.com", callback: handleCredentialResponse }); updateUIBasedOnAuth(); } else { setTimeout(initGoogleLogin, 200); } }

    function renderAccountPage() {
        const accContainer = document.getElementById("accountContent");
        if(!accContainer) return;
        if(!currentUser) {
            accContainer.innerHTML = `<div class="account-card"><i class="fas fa-user-circle" style="font-size: 80px; color: var(--accent); margin-bottom: 20px;"></i><h2>NOT LOGGED IN</h2><p>Please LOGIN via top button.</p></div>`;
            return;
        }
        const isLocal = currentUser.authType === 'local';
        accContainer.innerHTML = `
            <div class="account-card">
                <div style="position:relative; display:inline-block; margin-bottom: 20px;">
                    <img src="${currentUser.picture}" class="profile-main-img" id="userAvatar">
                    <input type="file" id="avatarInput" style="display:none;" accept="image/*">
                    <div style="background:var(--accent); color:white; border-radius:50%; width:35px; height:35px; display:flex; align-items:center; justify-content:center; position:absolute; bottom:15px; right:5px; cursor:pointer; border:3px solid var(--card-bg);" onclick="document.getElementById('avatarInput').click()">
                        <i class="fas fa-camera"></i>
                    </div>
                </div>
                <div id="nameDisplay"><h2>${currentUser.name}</h2><button onclick="enableNameEdit()" style="background:rgba(255,255,255,0.1); border:none; color:var(--text-primary); cursor:pointer; font-size:0.85rem; padding: 6px 15px; border-radius: 20px;"><i class="fas fa-edit"></i> Edit Username</button></div>
                <div id="nameEditArea" style="display:none;"><input type="text" id="editNameInput" class="edit-input" value="${currentUser.name}"><br><button class="save-btn" onclick="saveNewName()">Save Changes</button></div>
                <p style="margin-top:15px;">${currentUser.email}</p>
                ${isLocal ? `<button id="changePwdBtnAccount" style="margin: 15px auto 0; background:rgba(255,255,255,0.1); border:1px solid var(--accent); padding:10px 20px; border-radius:40px; color:var(--accent); font-weight:800; cursor:pointer;"><i class="fas fa-key"></i> CHANGE PASSWORD</button>` : ''}
                <hr style="margin:25px 0;"><button onclick="logoutUser()" style="padding:12px 30px; border-radius:30px; border:2px solid var(--accent); background:none; color:var(--accent); cursor:pointer; font-weight:800;">Logout Account</button>
            </div>`;
        if(isLocal) document.getElementById('changePwdBtnAccount')?.addEventListener('click', () => showChangePasswordModal());
        document.getElementById('avatarInput')?.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if(file) { const reader = new FileReader(); reader.onload = function(event) { const newPic = event.target.result; currentUser.picture = newPic; if(currentUser.authType === 'local') updateLocalUser(currentUser.email, { picture: newPic }); else { localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(currentUser)); renderAccountPage(); } }; reader.readAsDataURL(file); }
        });
    }
    function showChangePasswordModal() {
        const pwdHtml = `<div id="pwdModalOverlay" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); backdrop-filter:blur(8px); z-index:2000; display:flex; align-items:center; justify-content:center;"><div class="account-card" style="max-width:400px; margin:0;"><h3>Change Password</h3><input type="password" id="oldPwd" class="auth-input" placeholder="Old Password"><input type="password" id="newPwd" class="auth-input" placeholder="New Password (Letters+Numbers, min8)"><div id="pwdError" class="error-msg"></div><button id="confirmPwdChange" class="auth-btn">Update Password</button><button onclick="closePwdModal()" style="margin-top:10px; background:none; border:none; color:var(--text-secondary); cursor:pointer;">Cancel</button></div></div>`;
        document.body.insertAdjacentHTML('beforeend', pwdHtml);
        document.getElementById('confirmPwdChange').addEventListener('click', async () => {
            const oldP = document.getElementById('oldPwd').value;
            const newP = document.getElementById('newPwd').value;
            const res = changeLocalUserPassword(currentUser.email, oldP, newP);
            if(!res.success) document.getElementById('pwdError').innerText = res.error;
            else { alert("Password changed successfully!"); closePwdModal(); }
        });
    }
    function closePwdModal() { document.getElementById('pwdModalOverlay')?.remove(); }
    function enableNameEdit() { document.getElementById('nameDisplay').style.display = 'none'; document.getElementById('nameEditArea').style.display = 'block'; }
    function saveNewName() { const newName = document.getElementById('editNameInput').value; if(newName.trim()) { currentUser.name = newName; if(currentUser.authType === 'local') updateLocalUser(currentUser.email, { name: newName }); else { localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(currentUser)); renderAccountPage(); } renderAccountPage(); } }
    function logoutUser() { currentUser = null; localStorage.removeItem(STORAGE_USER_KEY); updateUIBasedOnAuth(); renderAccountPage(); switchPage('store'); }
    function deleteComment(id) { allComments = allComments.filter(c => c.id !== id); saveCommentsToLocal(); renderCommentsUI(); }
    function editComment(id) { const comment = allComments.find(c => c.id === id); const newText = prompt("Edit:", comment.text); if(newText && newText.trim()) { comment.text = newText; saveCommentsToLocal(); renderCommentsUI(); } }
    function renderCommentsUI() { const container = document.getElementById("commentsListContainer"); if(!container) return; if(allComments.length === 0) { container.innerHTML = "<p style='text-align:center;'>No comments yet.</p>"; return; } const now = new Date().getTime(); container.innerHTML = allComments.map(c => { const timePassed = (now - new Date(c.timestamp).getTime()) / 1000; const canEdit = currentUser && currentUser.name === c.userName && timePassed < 60; return `<div class="comment-card"><div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;"><img src="${c.userPic}" style="width:35px; height:35px; border-radius:50%; border: 2px solid var(--accent);"><strong>${c.userName}</strong></div><p>${c.text}</p>${canEdit ? `<div class="comment-actions"><button class="action-btn" onclick="editComment(${c.id})">Edit</button><button class="action-btn" onclick="deleteComment(${c.id})" style="color: #ff4d4d;">Delete</button></div>` : ''}</div>`; }).join(''); }

    function initExtras() {
        document.getElementById('darkmodeToggle').addEventListener('click', () => { document.body.classList.toggle('light'); });
        document.getElementById('musicToggle').addEventListener('click', () => { if(musicOn) { audio.pause(); musicOn = false; document.getElementById('musicStatus').innerText = 'OFF'; } else { audio.play(); musicOn = true; document.getElementById('musicStatus').innerText = 'ON'; } });
        document.getElementById('search').addEventListener('input', (e) => { displayApps(apps.filter(a => a.name.toLowerCase().includes(e.target.value.toLowerCase()))); });
        document.getElementById('submitCommentBtn').addEventListener('click', () => { const input = document.getElementById('newCommentInput'); if(input.value.trim() && currentUser) { allComments.unshift({ id: Date.now(), text: input.value, userName: currentUser.name, userPic: currentUser.picture, timestamp: new Date() }); saveCommentsToLocal(); renderCommentsUI(); input.value = ""; } });
        
        document.getElementById('authLoginTab')?.addEventListener('click', () => { document.getElementById('loginForm').style.display = 'block'; document.getElementById('signupForm').style.display = 'none'; document.getElementById('authLoginTab').classList.add('active-tab'); document.getElementById('authSignupTab').classList.remove('active-tab'); });
        document.getElementById('authSignupTab')?.addEventListener('click', () => { document.getElementById('loginForm').style.display = 'none'; document.getElementById('signupForm').style.display = 'block'; document.getElementById('authSignupTab').classList.add('active-tab'); document.getElementById('authLoginTab').classList.remove('active-tab'); });
        document.getElementById('doLoginBtn')?.addEventListener('click', () => { const email = document.getElementById('loginEmail').value; const pwd = document.getElementById('loginPassword').value; const res = loginUser(email, pwd); if(res.success) { currentUser = res.userData; localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(currentUser)); updateUIBasedOnAuth(); switchPage('account'); } else { document.getElementById('loginError').innerText = res.error; } });
        document.getElementById('doSignupBtn')?.addEventListener('click', () => { const username = document.getElementById('signupUsername').value; const email = document.getElementById('signupEmail').value; const pwd = document.getElementById('signupPassword').value; const confirm = document.getElementById('signupConfirm').value; if(pwd !== confirm) { document.getElementById('signupError').innerText = "Passwords do not match."; return; } const reg = registerUser(username, email, pwd); if(reg.success) { currentUser = reg.userData; localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(currentUser)); updateUIBasedOnAuth(); switchPage('account'); } else { document.getElementById('signupError').innerText = reg.error; } });
        
        // Login button close menu fixed
        document.getElementById('menuLoginBtn').onclick = () => { 
            switchPage('auth'); 
            document.getElementById('mainNav').classList.remove('show'); // menu eror eka
        };
    }

    window.addEventListener('DOMContentLoaded', () => {
        const savedUser = localStorage.getItem(STORAGE_USER_KEY);
        if(savedUser) currentUser = JSON.parse(savedUser);
        loadCommentsFromLocal();
        initGoogleLogin();
        bindNavEvents();
        initExtras();
        displayApps(apps);
        switchPage('store');
        showSlides();
        if (!localStorage.getItem(LOCAL_USERS_KEY)) saveLocalUsers([]);
    });
