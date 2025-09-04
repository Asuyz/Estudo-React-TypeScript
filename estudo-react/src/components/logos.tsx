import { useState } from "react"

export default function Logos() {

    const [logo, setLogo] = useState('')

    interface MostrarLogoEvent {
        target: {
            value: string;
        };
    }

    const mostrarLogo = (event: MostrarLogoEvent): void => {
        setLogo(event.target.value);
    }

    return(
        <div>
            <h2>Selecione uma distro para ver o logo: (Apenas a logo da fedora esta com a exibicao correta)</h2>
            <select onChange={mostrarLogo}>
                <option value="">Selecione</option>
                <option value="https://commons.wikimedia.org/wiki/File:UbuntuCoF.svg">Ubuntu</option>
                <option value="https://upload.wikimedia.org/wikipedia/commons/3/3f/Fedora_logo.svg">Fedora</option>
                <option value="https://source.unsplash.com/300x200/?archlinux">Arch Linux</option>
                <option value="https://source.unsplash.com/300x200/?debian">Debian</option>
                <option value="https://source.unsplash.com/300x200/?manjaro">Manjaro</option>
                <option value="https://source.unsplash.com/300x200/?popos">Pop!_OS</option>
                <option value="https://source.unsplash.com/300x200/?linuxmint">Linux Mint</option>
                <option value="https://source.unsplash.com/300x200/?opensuse">openSUSE</option>
                <option value="https://source.unsplash.com/300x200/?elementaryos">Elementary OS</option>
                <option value="https://source.unsplash.com/300x200/?zorin">Zorin OS</option>
                <option value="https://source.unsplash.com/300x200/?centos">CentOS</option>
                <option value="https://source.unsplash.com/300x200/?kali">Kali Linux</option>
                <option value="https://source.unsplash.com/300x200/?alpine">Alpine Linux</option>
                <option value="https://source.unsplash.com/300x200/?deepin">Deepin</option>
                <option value="https://source.unsplash.com/300x200/?mxlinux">MX Linux</option>
                <option value="https://source.unsplash.com/300x200/?solus">Solus</option>
                <option value="https://source.unsplash.com/300x200/?garuda">Garuda Linux</option>
                <option value="https://source.unsplash.com/300x200/?endeavouros">EndeavourOS</option>
                <option value="https://source.unsplash.com/300x200/?voidlinux">Void Linux</option>
                <option value="https://source.unsplash.com/300x200/?slackware">Slackware</option>
                <option value="https://source.unsplash.com/300x200/?gentoo">Gentoo</option>
                <option value="https://source.unsplash.com/300x200/?clearlinux">Clear Linux</option>
                <option value="https://source.unsplash.com/300x200/?q4os">Q4OS</option>
                <option value="https://source.unsplash.com/300x200/?parrotos">Parrot OS</option>
            </select> {/* ✅ fechamento correto do select */}

      {logo && (
        <div style={{ marginTop: "20px" }}>
          <img src={logo} alt="Logo da distro" width={150} />
        </div>
      )}
    </div>
  )
}