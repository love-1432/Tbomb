document.getElementById('runBtn').addEventListener('click', function() {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = '';

    function detectDistro() {
        // Dummy function to simulate the behavior
        return 'ubuntu';
    }

    function pause() {
        alert('Press any key to continue...');
    }

    function banner() {
        outputDiv.textContent += '\nIntroducing TBomb\nCreated By SpeedX\nFor Any Queries Join Me!!!\nTelegram: https://t.me/TBombChat\nYouTube: https://www.youtube.com/c/SpeedXTech\nNOTE: Kindly move to the PIP version Of TBomb for more stability.\n';
    }

    function initEnviron(distro) {
        const backends = {
            "arch": "pacman -S --noconfirm",
            "debian": "apt-get -y install",
            "ubuntu": "apt -y install",
            "termux": "apt -y install",
            "fedora": "yum -y install",
            "redhat": "yum -y install",
            "SuSE": "zypper -n install",
            "sles": "zypper -n install",
            "darwin": "brew install",
            "alpine": "apk add"
        };

        const INSTALL = backends[distro];
        let PYTHON, SUDO;
        if (distro === 'termux') {
            PYTHON = 'python';
            SUDO = '';
        } else {
            PYTHON = 'python3';
            SUDO = 'sudo';
        }
        const PIP = `${PYTHON} -m pip`;
        return { INSTALL, PYTHON, SUDO, PIP };
    }

    function installDeps(INSTALL, PYTHON, SUDO, PIP) {
        const packages = ['openssl', 'git', PYTHON, `${PYTHON}-pip`, 'figlet', 'toilet'];
        // Simulation of package installation
        packages.forEach(package => {
            outputDiv.textContent += `Installing ${package}\n`;
        });
        outputDiv.textContent += 'Requirements Installed.\n';
    }

    function main() {
        banner();
        pause();
        const distro = detectDistro();
        const { INSTALL, PYTHON, SUDO, PIP } = initEnviron(distro);
        installDeps(INSTALL, PYTHON, SUDO, PIP);
        outputDiv.textContent += 'All Requirements Found.\n';
        pause();
    }

    main();
});

