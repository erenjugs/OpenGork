<div align="center">

<img src="https://capsule-render.vercel.app/api?type=venom&color=0:000000,50:1a1a2e,100:4a0080&height=300&section=header&text=OPENGORK&fontSize=90&fontColor=ffffff&animation=twinkling&fontAlignY=40&desc=UNCENSORED%20AI%20AGENT&descSize=25&descAlignY=65&stroke=ffffff&strokeWidth=1" width="100%"/>

<br>
<br>

<a href="https://github.com/erenjugs/OpenGork/stargazers">
  <img src="https://img.shields.io/github/stars/erenjugs/OpenGork?style=for-the-badge&logo=starship&logoColor=white&labelColor=000000&color=purple" alt="Stars">
</a>
<a href="https://github.com/erenjugs/OpenGork/network/members">
  <img src="https://img.shields.io/github/forks/erenjugs/OpenGork?style=for-the-badge&logo=git&logoColor=white&labelColor=000000&color=blue" alt="Forks">
</a>
<a href="https://github.com/erenjugs/OpenGork/issues">
  <img src="https://img.shields.io/github/issues/erenjugs/OpenGork?style=for-the-badge&logo=codeigniter&logoColor=white&labelColor=000000&color=red" alt="Issues">
</a>
<a href="LICENSE">
  <img src="https://img.shields.io/badge/LICENSE-MIT-green?style=for-the-badge&logo=opensourceinitiative&logoColor=white&labelColor=000000" alt="License">
</a>

<br>
<br>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=3000&pause=1000&color=A855F7&center=true&vCenter=true&multiline=true&repeat=false&width=800&height=80&lines=The+First+Uncensored+OpenClaw+Agent;Powered+by+Grok+%E2%80%94+Heretic+Mode" alt="Typing SVG" />

<br>

<p>
  <a href="#-choose-your-setup"><img src="https://img.shields.io/badge/GET%20STARTED-4a0080?style=for-the-badge" alt="Get Started"></a>
  <a href="#modes"><img src="https://img.shields.io/badge/MODES-1a1a2e?style=for-the-badge" alt="Modes"></a>
  <a href="#usage"><img src="https://img.shields.io/badge/USAGE-1a1a2e?style=for-the-badge" alt="Usage"></a>
</p>

</div>

<br>

---

<div align="center">
<h2>
<img src="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif" width="50"> 
CHOOSE YOUR SETUP
</h2>
</div>

<br>

<div align="center">

<table>
<tr>
<td align="center" width="50%">
<br>
<img src="https://img.shields.io/badge/OPTION%201-LOCAL%20HERETIC%20MODEL-00ff00?style=for-the-badge&labelColor=000000"/>
<br><br>
<img src="https://img.shields.io/badge/CENSORSHIP-NONE-brightgreen?style=flat-square&labelColor=1a1a1a"/>
<br><br>

**100% UNCENSORED**

Run Grok locally with Ollama.
No API limits. No content filtering.
Complete privacy. Full control.

<br>

**Recommended for:**
- Maximum freedom
- Privacy-focused users
- Offline usage
- No API costs

<br>
</td>
<td align="center" width="50%">
<br>
<img src="https://img.shields.io/badge/OPTION%202-xAI%20API-ff6600?style=for-the-badge&labelColor=000000"/>
<br><br>
<img src="https://img.shields.io/badge/CENSORSHIP-PARTIAL-orange?style=flat-square&labelColor=1a1a1a"/>
<br><br>

**MOSTLY UNCENSORED**

Use xAI's cloud API.
Fast responses. Real-time data.
Some content restrictions apply.

<br>

**Note:** xAI API has some safety 
filters that cannot be bypassed.
Not fully uncensored.

<br>
</td>
</tr>
</table>

</div>

<br>

---

<div align="center">
<h2>
<img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="40">
OPTION 1: LOCAL HERETIC MODEL (FULLY UNCENSORED)
</h2>
</div>

<br>

<div align="center">
<img src="https://img.shields.io/badge/RECOMMENDED-TRUE%20HERETIC%20MODE-00ff00?style=for-the-badge&labelColor=000000"/>
</div>

<br>

### Step 1: Install Ollama

```bash
# Linux/WSL
curl -fsSL https://ollama.com/install.sh | sh

# macOS
brew install ollama

# Windows
# Download from https://ollama.com/download
```

### Step 2: Pull the Heretic Model

```bash
# Recommended uncensored models (choose one):

# Dolphin Mixtral - Fully uncensored, very capable
ollama pull dolphin-mixtral:8x7b

# Dolphin Llama 3 - Fast and uncensored  
ollama pull dolphin-llama3:8b

# Mistral OpenOrca - Good balance of speed/quality
ollama pull mistral-openorca

# WizardLM Uncensored - Great for coding + chat
ollama pull wizardlm-uncensored:13b
```

### Step 3: Configure OpenGork for Local

```bash
git clone https://github.com/erenjugs/OpenGork.git
cd OpenGork

# Set to use local Ollama
export OPENGORK_MODE="local"
export OLLAMA_MODEL="dolphin-mixtral:8x7b"

# Run
./gork "No restrictions. What do you really think?"
```

<br>

<div align="center">

| Local Model | Size | Speed | Uncensored |
|:------------|:----:|:-----:|:----------:|
| `dolphin-mixtral:8x7b` | 26GB | Medium | 100% |
| `dolphin-llama3:8b` | 4.7GB | Fast | 100% |
| `mistral-openorca` | 4GB | Fast | 100% |
| `wizardlm-uncensored:13b` | 7.4GB | Medium | 100% |

</div>

<br>

---

<div align="center">
<h2>
<img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="40">
OPTION 2: xAI API (PARTIAL CENSORSHIP)
</h2>
</div>

<br>

<div align="center">
<img src="https://img.shields.io/badge/WARNING-NOT%20FULLY%20UNCENSORED-ff6600?style=for-the-badge&labelColor=000000"/>
</div>

<br>

> **Important:** The xAI API has built-in safety filters that cannot be disabled. While Grok is more 
> permissive than ChatGPT or Claude, it is **not fully uncensored**. Some content will still be refused.
> For true uncensored AI, use Option 1 (Local Heretic Model).

<br>

### Step 1: Get xAI API Key

1. Go to [console.x.ai](https://console.x.ai)
2. Create an account
3. Generate an API key

### Step 2: Configure OpenGork

```bash
git clone https://github.com/erenjugs/OpenGork.git
cd OpenGork

# Set API key
export XAI_API_KEY="xai-your-key-here"

# Run
./gork "Your question here"
```

<br>

<div align="center">

| xAI Model | Speed | Context | Censorship Level |
|:----------|:-----:|:-------:|:----------------:|
| `grok-3` | Fast | 128K | Partial filtering |
| `grok-4` | Medium | 128K | Partial filtering |
| `grok-3-mini` | Fastest | 128K | Partial filtering |

</div>

<br>

<div align="center">
<table>
<tr>
<td>

**xAI API Will Answer:**
- Controversial opinions
- Edgy humor
- Most adult topics
- Criticism of public figures
- Politically incorrect content

</td>
<td>

**xAI API May Refuse:**
- Illegal activity instructions
- Explicit harmful content
- Certain extreme requests
- Some safety-related queries

</td>
</tr>
</table>
</div>

<br>

---

<div align="center">
<h2>
<img src="https://media.giphy.com/media/jSKBmKkvo2dPQQtsR1/giphy.gif" width="40">
MODES
</h2>
</div>

<br>

<div align="center">

<table>
<tr>
<td align="center" width="20%">
<br>
<img src="https://img.shields.io/badge/HERETIC-ff0040?style=for-the-badge&labelColor=000000" alt="Heretic"/>
<br><br>
<strong>UNCENSORED</strong>
<br>
<sub>No restrictions</sub>
<br>
<sub>No filters</sub>
<br>
<sub>Full access</sub>
<br><br>
<code>--heretic</code>
<br><br>
</td>
<td align="center" width="20%">
<br>
<img src="https://img.shields.io/badge/SAVAGE-ff6600?style=for-the-badge&labelColor=000000" alt="Savage"/>
<br><br>
<strong>BRUTAL</strong>
<br>
<sub>Maximum roast</sub>
<br>
<sub>No sugarcoating</sub>
<br>
<sub>Raw feedback</sub>
<br><br>
<code>--savage</code>
<br><br>
</td>
<td align="center" width="20%">
<br>
<img src="https://img.shields.io/badge/BASED-9933ff?style=for-the-badge&labelColor=000000" alt="Based"/>
<br><br>
<strong>UNFILTERED</strong>
<br>
<sub>Real opinions</sub>
<br>
<sub>Zero hedging</sub>
<br>
<sub>Direct takes</sub>
<br><br>
<code>--based</code>
<br><br>
</td>
<td align="center" width="20%">
<br>
<img src="https://img.shields.io/badge/GENIUS-0099ff?style=for-the-badge&labelColor=000000" alt="Genius"/>
<br><br>
<strong>EXPERT</strong>
<br>
<sub>Deep analysis</sub>
<br>
<sub>Max intelligence</sub>
<br>
<sub>PhD level</sub>
<br><br>
<code>--genius</code>
<br><br>
</td>
<td align="center" width="20%">
<br>
<img src="https://img.shields.io/badge/CHAOS-00ff88?style=for-the-badge&labelColor=000000" alt="Chaos"/>
<br><br>
<strong>CREATIVE</strong>
<br>
<sub>Wild ideas</sub>
<br>
<sub>Unconventional</sub>
<br>
<sub>Mad genius</sub>
<br><br>
<code>--chaos</code>
<br><br>
</td>
</tr>
</table>

</div>

<br>

---

<div align="center">
<h2>
<img src="https://media.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif" width="40">
USAGE
</h2>
</div>

<br>

<details>
<summary><img src="https://img.shields.io/badge/BASIC%20COMMANDS-purple?style=flat-square" alt="Basic"/></summary>
<br>

```bash
# Direct questions
./gork "What's your honest opinion on AI regulation?"
./gork "Explain consciousness" --genius
./gork "Roast this startup idea" --savage

# With model selection (xAI API)
./gork "Complex analysis" --model grok-4

# With local model
OLLAMA_MODEL="dolphin-mixtral:8x7b" ./gork "Uncensored question"
```

</details>

<details>
<summary><img src="https://img.shields.io/badge/PIPE%20INPUT-blue?style=flat-square" alt="Pipe"/></summary>
<br>

```bash
# Code review
cat mycode.py | ./gork "Review this" --savage

# Git analysis
git diff | ./gork "Analyze these changes"

# API parsing
curl -s api.example.com | ./gork "Parse this response"
```

</details>

<br>

---

<div align="center">
<h2>
<img src="https://media.giphy.com/media/fwbZnTftCXVocKzfxR/giphy.gif" width="40">
COMPARISON
</h2>
</div>

<br>

<div align="center">

| Feature | Local Heretic | xAI API | ChatGPT | Claude |
|:--------|:-------------:|:-------:|:-------:|:------:|
| Uncensored | 100% | ~70% | ~10% | ~15% |
| Privacy | Full | Cloud | Cloud | Cloud |
| Speed | Depends on HW | Fast | Fast | Fast |
| Cost | Free | Pay per use | Pay | Pay |
| Offline | Yes | No | No | No |
| Real-time data | No | Yes | Paid | No |

</div>

<br>

---

<div align="center">
<h2>
<img src="https://media.giphy.com/media/UVG0BN8TOMKkPOJS6e/giphy.gif" width="40">
PROJECT STRUCTURE
</h2>
</div>

<br>

```
OpenGork/
│
├── gork                    # Main CLI executable
│
├── src/
│   ├── client.ts           # TypeScript API client
│   └── index.ts            # SDK entry point
│
├── skill/
│   └── SKILL.md            # Clawdbot skill definition
│
├── package.json
├── tsconfig.json
├── .env.example
├── LICENSE
└── README.md
```

<br>

---

<div align="center">
<h2>
<img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="40">
REQUIREMENTS
</h2>
</div>

<br>

<div align="center">

**For Local (Option 1):**

<img src="https://img.shields.io/badge/Ollama-installed-black?style=for-the-badge&logo=ollama&logoColor=white"/>
<img src="https://img.shields.io/badge/RAM-16GB+-black?style=for-the-badge&logo=memory&logoColor=white"/>
<img src="https://img.shields.io/badge/Storage-30GB+-black?style=for-the-badge&logo=harddisk&logoColor=white"/>

<br><br>

**For xAI API (Option 2):**

<img src="https://img.shields.io/badge/bash-4.0+-black?style=for-the-badge&logo=gnubash&logoColor=white"/>
<img src="https://img.shields.io/badge/curl-any-black?style=for-the-badge&logo=curl&logoColor=white"/>
<img src="https://img.shields.io/badge/jq-1.6+-black?style=for-the-badge&logo=json&logoColor=white"/>
<img src="https://img.shields.io/badge/xAI-API%20KEY-black?style=for-the-badge&logo=x&logoColor=white"/>

</div>

<br>

---

<div align="center">

<br>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,50:1a1a2e,100:4a0080&height=150&section=footer&fontSize=50&fontColor=ffffff&animation=twinkling" width="100%"/>

<br>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=18&duration=3000&pause=1000&color=A855F7&center=true&vCenter=true&width=600&lines=Local+Heretic+%3D+100%25+Uncensored;xAI+API+%3D+Partial+Filtering;Choose+Your+Freedom+Level;MIT+License" alt="Footer" />

<br>

<a href="https://ollama.com"><img src="https://img.shields.io/badge/Ollama-000000?style=for-the-badge&logo=ollama&logoColor=white" alt="Ollama"/></a>
<a href="https://x.ai"><img src="https://img.shields.io/badge/xAI-000000?style=for-the-badge&logo=x&logoColor=white" alt="xAI"/></a>
<a href="https://github.com/clawdbot/clawdbot"><img src="https://img.shields.io/badge/OpenClaw-4a0080?style=for-the-badge" alt="OpenClaw"/></a>

<br>
<br>

<sub>True freedom requires local execution.</sub>

</div>

----Pushed updates
</div>

"Gork uncensored made compatible for Openclaw"

</div>

"Mathematics is the language with which God has written the universe.

</div>