process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const gf = require('crypto-js');
const Ud = "S4NT4_S3CR3T_K3Y_T0_ENCRYPT_DATA";

function Wd(e) {
    const t = JSON.stringify(e);
    return gf.AES.encrypt(t, Ud).toString()
}

function $d(e, t) {
    const r = Math.floor(Math.random() * 9) + 1,
        n = `${e}-${t}-${r}`;
    return {
        checksum: gf.SHA256(n).toString(),
        salt: r
    }
}

async function sendScore(e, t) {
    const {
        checksum: r,
        salt: n
    } = $d(e, t), l = Wd({
        playerName: e,
        score: t,
        checksum: r,
        salt: n
    });
    try {
        await fetch("https://day3.challenges.xmas.root-me.org/api/scores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                data: l
            })
        }).then(e => e.json()).then(e => {
            console.log(e);
            return e
        }).catch(e => {
            console.error("Error submitting score:", e);
            return {
                success: !1
            }
        });
    } catch (i) {
        return console.error("Error submitting score:", i), {
            success: !1
        }
    }
}

(async () => {
    await sendScore("NedX", 133338);

})();
