export const tools = [
  {
    id: "nodejs",
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
    category: "Languages & Runtimes",
    versions: ["LTS", "Current"],
    commands: {
      windows: "winget install OpenJS.NodeJS.LTS",
      macos: "brew install node@lts",
      linux: "curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - && sudo apt-get install -y nodejs",
    },
  },
  {
    id: "python",
    name: "Python",
    description: "High-level programming language for general-purpose programming",
    category: "Languages & Runtimes",
    versions: ["3.12", "3.11", "3.10"],
    commands: {
      windows: "winget install Python.Python.3.12",
      macos: "brew install python@3.12",
      linux: "sudo apt-get install python3.12",
    },
  },
  {
    id: "java",
    name: "Java",
    description: "Object-oriented programming language and development platform",
    category: "Languages & Runtimes",
    versions: ["JDK 21 LTS", "JDK 17 LTS"],
    commands: {
      windows: "winget install Oracle.JDK.21",
      macos: "brew install openjdk@21",
      linux: "sudo apt-get install openjdk-21-jdk",
    },
  },
  {
    id: "go",
    name: "Go",
    description: "Open source programming language by Google",
    category: "Languages & Runtimes",
    versions: ["1.21", "1.20"],
    commands: {
      windows: "winget install Golang.Go",
      macos: "brew install go",
      linux: "sudo apt-get install golang",
    },
  },
  {
    id: "rust",
    name: "Rust",
    description: "Systems programming language focused on safety and performance",
    category: "Languages & Runtimes",
    versions: ["Stable"],
    commands: {
      windows: "winget install Rustlang.Rust.MSVC",
      macos: "brew install rust",
      linux: "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh",
    },
  },
  {
    id: "git",
    name: "Git",
    description: "Distributed version control system",
    category: "Version Control",
    commands: {
      windows: "winget install Git.Git",
      macos: "brew install git",
      linux: "sudo apt-get install git",
    },
  },
  {
    id: "docker",
    name: "Docker",
    description: "Platform for developing, shipping, and running applications",
    category: "Containers",
    commands: {
      windows: "winget install Docker.DockerDesktop",
      macos: "brew install --cask docker",
      linux: "curl -fsSL https://get.docker.com | sh",
    },
  },
  {
    id: "kubernetes",
    name: "Kubernetes CLI",
    description: "Command-line tool for Kubernetes cluster management",
    category: "Containers",
    commands: {
      windows: "winget install Kubernetes.kubectl",
      macos: "brew install kubectl",
      linux: "sudo snap install kubectl --classic",
    },
  },
  {
    id: "vscode",
    name: "Visual Studio Code",
    description: "Lightweight but powerful source code editor",
    category: "Editors",
    commands: {
      windows: "winget install Microsoft.VisualStudioCode",
      macos: "brew install --cask visual-studio-code",
      linux: "sudo snap install code --classic",
    },
  },
  {
    id: "postman",
    name: "Postman",
    description: "API platform for building and using APIs",
    category: "Development Tools",
    commands: {
      windows: "winget install Postman.Postman",
      macos: "brew install --cask postman",
      linux: "sudo snap install postman",
    },
  },
  {
    id: "awscli",
    name: "AWS CLI",
    description: "Command-line interface for AWS services",
    category: "Cloud Tools",
    commands: {
      windows: "winget install Amazon.AWSCLI",
      macos: "brew install awscli",
      linux: "sudo apt-get install awscli",
    },
  },
  {
    id: "terraform",
    name: "Terraform",
    description: "Infrastructure as Code tool",
    category: "Cloud Tools",
    commands: {
      windows: "winget install Hashicorp.Terraform",
      macos: "brew install terraform",
      linux: "sudo apt-get install terraform",
    },
  }
];