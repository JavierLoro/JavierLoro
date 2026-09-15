h1 align="center">Hi, I'm Javier Loro 👋</h1>

<p align="center">
  <b>Software Engineer — AI integrations, full-stack applications & self-hosted systems</b>
</p>

<p align="center">
  I build and operate applications, and design integrations that let AI agents work with persistent knowledge,<br>
  real software and automated workflows.
</p>

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-Agent%20Tools-5A67D8?style=flat)
![Proxmox](https://img.shields.io/badge/Proxmox-E57000?style=flat&logo=proxmox&logoColor=white)

</div>

---

<h2 align="center">🧩 About me</h2>

<p align="center">
  I enjoy building the whole thing: the application, the integrations around it, and the systems that keep it running.<br>
  My self-hosted environment is where I deploy many of my projects and explore how software and AI agents can work together.
</p>

<table align="center">
  <tr>
    <th align="center" width="33%">🌐 Applications</th>
    <th align="center" width="34%">🧠 AI integrations</th>
    <th align="center" width="33%">🏠 Self-hosted systems</th>
  </tr>
  <tr>
    <td align="center">Full-stack software<br>from UI to persistence</td>
    <td align="center">MCP & WebMCP interfaces<br>between agents, knowledge and applications</td>
    <td align="center">Deployment, networking,<br>updates, monitoring and backups</td>
  </tr>
</table>

---

<h2 align="center">🚀 Selected projects</h2>

<div align="center">

<h3>🧠 <a href="https://github.com/JavierLoro/Alexandrie">Alexandrie — Persistent knowledge through MCP</a></h3>

<p><b>A persistent knowledge layer shared across my AI environments.</b></p>

<p>
  <img src="https://img.shields.io/badge/MCP-Model%20Context%20Protocol-5A67D8?style=flat" alt="MCP">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white" alt="Go">
  <img src="https://img.shields.io/badge/Streamable%20HTTP-remote%20MCP-4B5563?style=flat" alt="Streamable HTTP">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker">
</p>

<p>
  I use Alexandrie as my self-hosted knowledge base and built an <b>MCP layer on top of it</b><br>
  so Claude, coding agents and other MCP-compatible clients can access the same persistent information<br>
  across environments and conversations.
</p>

</div>

```mermaid
flowchart LR
    A["Claude / coding agents / MCP clients"] <--> B["Custom MCP layer"]
    B <-->|"Search · Read · Edit"| C[("Persistent knowledge")]
```

<details>
<summary>Engineering details · persistent knowledge and MCP</summary>

I extended an existing self-hosted application with an MCP server that exposes its
knowledge model through semantic operations.

- Designed tools for navigating, searching, reading and modifying documents.
- Added outline and section-level reads so agents do not need full documents for every task.
- Reduced unnecessary tool-response content to keep agent context focused.
- Added Streamable HTTP access for remote MCP clients.
- Integrated authentication and token handling for remote access.
- Kept the MCP rendering pipeline synchronized with the main application's Markdown renderer.
- Added agent-oriented operations without making the normal web application depend on MCP.
- Deployed and operate the integration on my own infrastructure.

The important part for me was not adding a chat interface to a wiki. It was turning
persistent knowledge into a reusable capability that different agents and environments
can access through a common interface.

</details>

---

<div align="center">

<h3>🌐 <a href="https://github.com/JavierLoro/wiki-agent-webmcp">Workspace Platform — Learning WebMCP</a></h3>

<p><b>Exploring how web applications can expose their capabilities directly to AI agents.</b></p>

<p>
  <img src="https://img.shields.io/badge/WebMCP-semantic%20web%20tools-7C3AED?style=flat" alt="WebMCP">
  <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white" alt="SQLite">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker">
</p>

<p>
  Built as a practical environment for learning <b>WebMCP</b>: instead of having an agent navigate<br>
  the interface visually, the application exposes semantic operations over its own domain.
</p>

</div>

```mermaid
flowchart LR
    A["Human"] --> B["Web UI"]
    C["AI agent"] --> D["WebMCP"]
    B --> E[("Application state")]
    D --> E
```

<details>
<summary>Engineering details · WebMCP and agent-facing application design</summary>

The project helped me explore what changes when an application is intentionally designed
to be usable by both humans and agents.

**What I explored**

- Designing semantic domain operations instead of UI automation.
- Deciding which application capabilities should be exposed to an agent and which should remain internal.
- Returning focused context instead of leaking the whole application state into every interaction.
- Separating agent proposals from authoritative human decisions.
- Sharing persistent application state between humans and external agents.
- Keeping the regular web application fully usable when WebMCP is unavailable.
- Treating repository and user-provided content as data rather than instructions.
- Applying explicit limits to repository exploration, model calls, bytes, tokens and estimated cost.

**Implemented capabilities**

- Inspect workspace context, tasks, children, open items and activity.
- Create or update tasks and add structured knowledge.
- Propose decisions without making them authoritative automatically.
- Analyze public repositories and build evidence-backed import previews.
- Persist state in SQLite so application context survives individual AI conversations.

**Stack:** React, TypeScript, Node.js, Express, SQLite, Docker, OpenAI integrations and WebMCP.

</details>

---

<div align="center">

<h3>🚀 <a href="https://github.com/JavierLoro/esigglol">ESIgg.lol</a></h3>

<p><b>A self-hosted web application I deploy, monitor and maintain end-to-end.</b></p>

<p>
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/SQLite-WAL-003B57?style=flat&logo=sqlite&logoColor=white" alt="SQLite">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat&logo=githubactions&logoColor=white" alt="GitHub Actions">
  <img src="https://img.shields.io/badge/Tailscale-111111?style=flat&logo=tailscale&logoColor=white" alt="Tailscale">
  <img src="https://img.shields.io/badge/Prometheus-E6522C?style=flat&logo=prometheus&logoColor=white" alt="Prometheus">
</p>

<p>
  A production application where the interesting engineering extends beyond features:<br>
  automated testing, container delivery, private-network deployment, observability, backups and recovery.
</p>

<p><i>Used to manage internal League of Legends tournaments at ESI-UCLM.</i></p>

</div>

```mermaid
flowchart LR
    A["Code"] --> B["GitHub Actions"]
    B --> C["Tests & build"]
    C --> D["GHCR"]
    D --> E["Tailscale deployment"]
    E --> F["Proxmox"]
```

<details>
<summary>Engineering details · operating a real application</summary>

- **Application:** Next.js and TypeScript, SQLite with WAL mode, authentication and role-specific access.
- **External integrations:** Riot and Twitch APIs.
- **Validation & reliability:** Zod validation, Pino logging, health endpoints and Prometheus-compatible metrics.
- **Testing:** Unit and end-to-end tests with Vitest and Playwright.
- **Delivery:** GitHub Actions runs linting, tests and a production build, then publishes the Docker image to GHCR.
- **Private deployment:** GitHub Actions can reach the self-hosted environment through Tailscale and call an authenticated redeployment service.
- **Updates:** Docker Compose and Watchtower support production updates on the host.
- **Data protection:** Automated SQLite backups with snapshot validation and retention.

This project helped me move from **"the application works"** to **"the application can be deployed, updated, observed, backed up and recovered."**


</details>

---

<div align="center">

<h3>🏗️ <a href="https://github.com/JavierLoro/webLogrosApp">webLogrosApp</a></h3>

<p><b>Building the complete full-stack application and delivery chain.</b></p>

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white" alt="Prisma">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/Nginx-009639?style=flat&logo=nginx&logoColor=white" alt="Nginx">
  <img src="https://img.shields.io/badge/GHCR-container%20registry-181717?style=flat&logo=github&logoColor=white" alt="GHCR">
</p>

<p>
  A progressive end-to-end project where I built and connected each layer myself:<br>
  frontend, backend, authentication, database, containers, reverse proxying, CI/CD and production deployment.
</p>

</div>

```mermaid
flowchart LR
    A["Next.js frontend"] --> B["Express API"]
    B --> C["Prisma"]
    C --> D[("PostgreSQL")]
    E["GitHub Actions"] --> F["GHCR"]
    F --> G["Docker Compose"]
    G --> H["Proxmox"]
```

<details>
<summary>Engineering details · building the complete software delivery chain</summary>

- **Frontend:** Next.js + TypeScript + Tailwind CSS.
- **Backend:** Express + TypeScript.
- **Data:** Prisma ORM and PostgreSQL.
- **Authentication:** JWT-based authentication with bcrypt.
- **Architecture:** Multi-tenant application model with separate frontend, backend and persistence layers.
- **Containerization:** Docker images for frontend and backend plus Docker Compose for local and production environments.
- **Reverse proxying:** Nginx inside the application stack, with external routing handled by my self-hosted infrastructure.
- **CI/CD:** GitHub Actions builds and publishes images to GHCR.
- **Operations:** Proxmox deployment, environment configuration, secrets management and automated updates with Watchtower.

Rather than focusing on one unusual technical problem, this project represents the
experience of building and connecting the **whole application lifecycle** myself.

</details>

---

<h2 align="center">🛠️ Other public work</h2>

| Project | What it demonstrates |
|:---|:---|
| 🗺️ **[mc-chunk-map](https://github.com/JavierLoro/VanillaOnlineMapMC)** | Direct integration with binary world data, caching, performance optimization and self-hosted deployment. |
| 🧩 **[Bridges](https://bridgeshashi.jlc-dev.me)** | A small production web product delivered as a fast public service. |
| 📚 **[@vibliofriki_bot](https://t.me/vibliofriki_bot)** | Automation around an external API with configurable Telegram alerts. |

<details>
<summary>Systems work · binary formats, caching and performance</summary>

![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat&logo=leaflet&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Proxmox](https://img.shields.io/badge/Proxmox-E57000?style=flat&logo=proxmox&logoColor=white)

For **mc-chunk-map**, I implemented a custom Anvil/NBT parser that reads Minecraft
world files directly, then built an interactive map with FastAPI and Leaflet.

The work includes:

- direct read-only access to live `.mca` world files,
- custom binary/NBT parsing,
- incremental processing and a persistent chunk cache,
- server-rendered PNG map layers,
- compressed tile metadata,
- progressive loading,
- Docker/systemd deployment,
- cross-container access on Proxmox.

Replacing large raw-data transfers with rendered layers and compressed metadata reduced
initial map loading from tens of seconds to around one second **in my environment**.

</details>

---

<h2 align="center">🏠 Behind the projects</h2>

<p align="center">
  <b>Self-hosted applications · Proxmox VE · Docker · private networking</b><br>
  I manage the deployment, connectivity, updates, persistence and backups behind many of my projects.<br>
  I also use coding agents with explicit scopes and independent checks of their work.
</p>

<details>
<summary>Infrastructure · hosting, networking, updates and backups</summary>

![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black)
![Proxmox](https://img.shields.io/badge/Proxmox-E57000?style=flat&logo=proxmox&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat&logo=nginx&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=flat&logo=cloudflare&logoColor=white)
![Tailscale](https://img.shields.io/badge/Tailscale-111111?style=flat&logo=tailscale&logoColor=white)

My personal **Proxmox VE** environment runs applications, databases, reverse proxying,
internal DNS, private networking and other self-hosted services.

My delivery workflows use GitHub Actions, Docker and GHCR, with Tailscale for private
connectivity and Nginx or Cloudflare where appropriate. Individual projects use different
deployment arrangements depending on their needs.

Running this environment gives me hands-on experience with:

- networking and service exposure,
- authentication,
- persistent storage,
- deployment and upgrades,
- health checks and monitoring,
- backups and recovery,
- reverse proxies and private connectivity.

</details>

<details>
<summary>AI-assisted development · workflow and private exploration</summary>

I use coding agents extensively, with a focus on making their work bounded and verifiable:

- Bounded context and explicit task scopes.
- Structured handoffs and persistent project state.
- Independent verification instead of trusting an agent's completion message.
- Evidence-based completion through tests, checks and structured results.

**Codex Projects Replica — private, ongoing**

A personal engineering project exploring persistent project coordination for coding agents:
bounded context, coordinator/orchestrator separation, independent verification, project
memory and evidence-based task completion.

The goal is not simply to run more agents, but to explore how agent-assisted development
can remain understandable, reproducible and verifiable across long-running projects.

</details>

<details>
<summary>Full technology stack</summary>

| Area | Technologies |
|---|---|
| Languages | TypeScript · JavaScript · Python · Go · C# · Kotlin · C++ |
| Frontend | React · Next.js · Vue · Tailwind CSS |
| Backend | Node.js · Express · FastAPI · Go |
| Data | PostgreSQL · SQLite · Prisma |
| AI integration | MCP · WebMCP · agent-facing tools · persistent agent context |
| Infrastructure | Docker · Docker Compose · Proxmox · Nginx · Cloudflare · Tailscale |
| Delivery | GitHub Actions · GHCR · automated deployments |
| Operations | Linux · health checks · metrics · backups · reverse proxies |

</details>

---

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/JavierLoro/JavierLoro/output/github-contribution-grid-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/JavierLoro/JavierLoro/output/github-contribution-grid-snake.svg">
  <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/JavierLoro/JavierLoro/output/github-contribution-grid-snake.svg">
</picture>

</div>

