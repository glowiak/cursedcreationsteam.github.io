let versionObject64 = {
    "Infdev": {
      // 
        "Infdev 20100227 (Maxxx)": [
            {
              version: "v1", 
              download: "../mods/64bit/infdev/inf-20100227/minecraft-inf-20100227-v1-maxxx.zip"
            },
        ],
        "Infdev 20100313 (RVH)": [
            // Todo: add notes system
            {
                version: "v0.0.1",
                download: "../mods/64bit/infdev/inf-20100313/inf313_long_0.0.1.zip"
            },
            {
                version: "v0.0.2",
                download: "../mods/64bit/infdev/inf-20100313/inf313_long_0.0.2.zip"
            },
            {
                version: "v0.0.3",
                download: "../mods/64bit/infdev/inf-20100313/inf313_long_0.0.3.zip"
            }
        ],
        "Infdev 20100325 (Maxxx)": [],
        "Infdev 20100330 (Zero)": [],
        "Infdev 20100414 (314rft)": [],
        "Infdev 20100420 (314rft, Zero)": [],
        "Infdev 20100624 (314rft)": [],
    },
    "Alpha": {
        "Alpha v1.0.1_01 (Zeta and Zero)": [
            {
                version: "0.0.3_02",
                download: "./mods/64bit/alpha/a1.0.1_01/minecraft-a1.0.1_01-64bit_v0.0.3_02-zero-and-zeta.zip",
            }
        ],
    }
}

const d64 = document.getElementById("downloads64")
const d64box = document.getElementById("downloads64-box")
const phase = document.getElementById("phase")
function changeDropdown(value) {
  d64.hidden = false
  d64.innerHTML = ""
  for (let val in versionObject64[value])
    d64.append(new Option(val, val))
  changeDownloads()
}

function changeDownloads() {
  d64box.innerHTML = ""
  for(const value of versionObject64[phase.value][d64.value]){
    const a = document.createElement('a')
    a.href = value.download
    a.textContent = value.version
    d64box.append(a)
    d64box.append(document.createElement('br'))
  }
}
