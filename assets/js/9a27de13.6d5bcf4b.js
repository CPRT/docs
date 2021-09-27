"use strict";(self.webpackChunkcprt_docs=self.webpackChunkcprt_docs||[]).push([[911],{5944:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return r},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=a(7462),o=a(3366),l=(a(7294),a(3905)),i=["components"],s={},r="ROS Installation",u={unversionedId:"software/Guides/ros-installation",id:"software/Guides/ros-installation",isDocsHomePage:!1,title:"ROS Installation",description:"\u26a0\ufe0f Before you continue:",source:"@site/docs/software/Guides/ros-installation.md",sourceDirName:"software/Guides",slug:"/software/Guides/ros-installation",permalink:"/docs/software/Guides/ros-installation",tags:[],version:"current",frontMatter:{},sidebar:"softwareSidebar",previous:{title:"Home",permalink:"/docs/"}},p=[{value:"Ubuntu",id:"ubuntu",children:[{value:"1. Setup sources.list",id:"1-setup-sourceslist",children:[]},{value:"2. Set up your keys",id:"2-set-up-your-keys",children:[]},{value:"3. Installation",id:"3-installation",children:[]},{value:"4. Environment setup",id:"4-environment-setup",children:[]},{value:"5. Dependencies for building packages",id:"5-dependencies-for-building-packages",children:[]}]},{value:"Windows",id:"windows",children:[{value:"1. Install Visual Studio 2019",id:"1-install-visual-studio-2019",children:[]},{value:"2. Install Chocolately",id:"2-install-chocolately",children:[]},{value:"3. Install Git",id:"3-install-git",children:[]},{value:"4. Binary Package Installation",id:"4-binary-package-installation",children:[]},{value:"5. Create a ROS Command Window shortcut",id:"5-create-a-ros-command-window-shortcut",children:[]},{value:"6. Windows Terminal Support",id:"6-windows-terminal-support",children:[]}]},{value:"WSL2 on Windows",id:"wsl2-on-windows",children:[{value:"1. Install WSL 2",id:"1-install-wsl-2",children:[]},{value:"2. Install ROS",id:"2-install-ros",children:[]}]}],d={toc:p};function c(e){var t=e.components,a=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ros-installation"},"ROS Installation"),(0,l.kt)("p",null,"\u26a0\ufe0f ",(0,l.kt)("strong",{parentName:"p"},"Before you continue:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If at all possible, it is ",(0,l.kt)("strong",{parentName:"li"},"highly")," recommended that you install ROS on a Linux-based operating system.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Package and dependency management is much simpler and the install process is much less complex"))),(0,l.kt)("li",{parentName:"ul"},"Avoid running ROS within a virtual machine, as the performance impact (particularily when running simulations ie. Gazebo) will be fairly significant."),(0,l.kt)("li",{parentName:"ul"},"If you are already running some distribution of Linux ... Great! Install ROS on that. "),(0,l.kt)("li",{parentName:"ul"},"If you are currently running Windows, take a stab at running ROS natively on Windows but be aware that the process is simpler on Linux.")),(0,l.kt)("h2",{id:"ubuntu"},"Ubuntu"),(0,l.kt)("p",null,"This guide covers the installation process for ROS on Ubuntu. Other Linux distributions should follow a very similar process but refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://wiki.ros.org/noetic/Installation"},"official installation")," guide to check for any distribution-specific tips.",(0,l.kt)("br",{parentName:"p"}),"\n","Source: ",(0,l.kt)("a",{parentName:"p",href:"https://wiki.ros.org/noetic/Installation/Ubuntu"},"https://wiki.ros.org/noetic/Installation/Ubuntu")),(0,l.kt)("h3",{id:"1-setup-sourceslist"},"1. Setup sources.list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sh -c 'echo \"deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main\" > /etc/apt/sources.list.d/ros-latest.list'\n")),(0,l.kt)("h3",{id:"2-set-up-your-keys"},"2. Set up your keys"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install curl # if you haven't already installed curl\ncurl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -\n")),(0,l.kt)("h3",{id:"3-installation"},"3. Installation"),(0,l.kt)("p",null,"First, make sure your Debian package index is up-to-date:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\n")),(0,l.kt)("p",null,"Desktop-Full Install: Everything in Desktop plus 2D/3D simulators and 2D/3D perception packages"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install ros-noetic-desktop-full\n")),(0,l.kt)("h3",{id:"4-environment-setup"},"4. Environment setup"),(0,l.kt)("p",null,"You must source this script in every bash terminal you use ROS in."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"source /opt/ros/noetic/setup.bash\n")),(0,l.kt)("p",null,"It can be convenient to automatically source this script every time a new shell is launched. These commands will do that for you."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc\nsource ~/.bashrc\n')),(0,l.kt)("h3",{id:"5-dependencies-for-building-packages"},"5. Dependencies for building packages"),(0,l.kt)("p",null,"Up to now you have installed what you need to run the core ROS packages. To create and manage your own ROS workspaces, there are various tools and requirements that are distributed separately. "),(0,l.kt)("p",null,"To install this tool and other dependencies for building ROS packages, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential\n")),(0,l.kt)("p",null,"Before you can use many ROS tools, you will need to initialize rosdep. rosdep enables you to easily install system dependencies for source you want to compile and is required to run some core components in ROS. If you have not yet installed rosdep, do so as follows."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install python3-rosdep\n")),(0,l.kt)("p",null,"With the following, you can initialize ",(0,l.kt)("inlineCode",{parentName:"p"},"rosdep"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rosdep init\nrosdep update\n")),(0,l.kt)("h2",{id:"windows"},"Windows"),(0,l.kt)("p",null,"If you do choose to install ROS on Windows, be aware that you are more likely to run into snags and issues which might not exist on Linux. If you are ok with that and you think you have what it takes, read on, otherwise consider dual-booting Windows and Linux."),(0,l.kt)("p",null,"Source: ",(0,l.kt)("a",{parentName:"p",href:"http://wiki.ros.org/Installation/Windows"},"http://wiki.ros.org/Installation/Windows")),(0,l.kt)("h3",{id:"1-install-visual-studio-2019"},"1. Install Visual Studio 2019"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Follow the instructions ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/cpp/build/vscpp-step-0-installation?view=msvc-160&viewFallbackFrom=vs-2019"},"here")," to download and install Visual Studio 2019. This installation can take up 10-15GB, so ensure you have enough space.  "),(0,l.kt)("li",{parentName:"ul"},"During installation, ensure that ",(0,l.kt)("inlineCode",{parentName:"li"},"Desktop development with C++"),' is selected under the "Workloads" tab and under "Individual Components" select ',(0,l.kt)("inlineCode",{parentName:"li"},"Windows 10 SDK (10.0.19041.0)"),".")),(0,l.kt)("h3",{id:"2-install-chocolately"},"2. Install Chocolately"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chocolately is the de-facto community package manager for Windows and allow software to be installed with a single command from the console.")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the Start Menu, find the ",(0,l.kt)("inlineCode",{parentName:"li"},"x64 Native Tools Command Prompt for VS 2019"),' item.\nRight Click, select More then "Run as Administrator"'),(0,l.kt)("li",{parentName:"ol"},"Copy the following command line. Paste it into the command window. Approve any prompts.\nOnce it has completed, close the command prompt to complete the install.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'```powershell\n@"%SystemRoot%\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString(\'https://chocolatey.org/install.ps1\'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\\chocolatey\\bin"\n```\n')))),(0,l.kt)("h3",{id:"3-install-git"},"3. Install Git"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Reopen the Visual Studio Command Window as described above. Please install Git using the command here, even if you have it installed as an application.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"choco upgrade git -y\n"))),(0,l.kt)("li",{parentName:"ul"},"After Git installed, ensure Git is now available in the Visual Studio command window.  ",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git --version\n"))),(0,l.kt)("li",{parentName:"ul"},"Close and Reopen the Visual Studio Command Window as described above.")),(0,l.kt)("h3",{id:"4-binary-package-installation"},"4. Binary Package Installation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To get things started, install the recommended desktop_full metapackage. A Metapackage is a collection of other packages. The Desktop-Full metapackage refers to a number of other packages needed to build, run, debug and visualize a robot."),(0,l.kt)("li",{parentName:"ul"},"Open the Visual Studio Command Prompt as Administrator as described above.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'mkdir c:\\opt\\chocolatey\nset ChocolateyInstall=c:\\opt\\chocolatey\nchoco source add -n=ros-win -s="https://aka.ms/ros/public" --priority=1\nchoco upgrade ros-noetic-desktop_full -y --execution-timeout=0\n')))),(0,l.kt)("h3",{id:"5-create-a-ros-command-window-shortcut"},"5. Create a ROS Command Window shortcut"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In order to use ROS on Windows, the ROS setup script needs to be called in each command Window. In order to not forget in the future, it is helpful to have a ROS shortcut which does this automatically.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Create an Administrative command line shortcut for Visual Studio:\nRight click in a Windows Explorer folder, select New > Shortcut")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In the shortcut path, copy the highlighted command line from the following options, depending on the Visual Studio install above:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If you are using Community:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'C:\\Windows\\System32\\cmd.exe /k "C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Community\\Common7\\Tools\\VsDevCmd.bat" -arch=amd64 -host_arch=amd64&& set ChocolateyInstall=c:\\opt\\chocolatey&& c:\\opt\\ros\\noetic\\x64\\setup.bat\n'))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Name the shortcut "ROS"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Set that shortcut as Administrator"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Right Click on the shortcut and choose "Properties".'),(0,l.kt)("li",{parentName:"ul"},"Select the Shortcut Tab if not already selected."),(0,l.kt)("li",{parentName:"ul"},"Press the Advanced button"),(0,l.kt)("li",{parentName:"ul"},'Check the button "Run as Administrator".'),(0,l.kt)("li",{parentName:"ul"},"Press OK on the Advanced properties dialog."),(0,l.kt)("li",{parentName:"ul"},'Press OK on the "ROS Properties" shortcut dialog.')))),(0,l.kt)("h3",{id:"6-windows-terminal-support"},"6. Windows Terminal Support"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you want to run ROS, under the new Windows Terminal check out the ",(0,l.kt)("a",{parentName:"li",href:"http://wiki.ros.org/Installation/Windows"},"official documentation")," for how to set that up.")),(0,l.kt)("h2",{id:"wsl2-on-windows"},"WSL2 on Windows"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The best of both worlds??? ... Maybe not"),(0,l.kt)("br",{parentName:"p"}),"\n","If you aren't familiar with WSL or the Windows Subsystem for Linux, you're in for a treat. WSL essentially runs a Linux kernel alongside Windows and allows you to install and run Linux applications and even access your Windows filesystem."),(0,l.kt)("p",null,"New features are frequently being added to WSL, and support is improving but one of the key features holding it back for the time-being is the lack of GPU passthrough support. For this reason, I wouldn't recommend running ROS on WSL but if you don't have a GPU or just want to test it out, its a cool option."),(0,l.kt)("h3",{id:"1-install-wsl-2"},"1. Install WSL 2"),(0,l.kt)("p",null,"Source: ",(0,l.kt)("a",{parentName:"p",href:"https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10"},"https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10"),(0,l.kt)("br",{parentName:"p"}),"\n","First we need to check which build of Windows you are running. Open up a console and run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"winver\n")),(0,l.kt)("p",null,'Note the number after "version" in the dialoge that appears. 1607 in this example:\n',(0,l.kt)("img",{parentName:"p",src:"https://www.cnet.com/a/img/CDGwKxcfvP-KcisjAwMB6JZP0TY=/940x0/2017/07/26/b0379d1c-8a80-457e-ad61-debc79ce0b2b/winver-window.jpg",alt:"winver Example"})),(0,l.kt)("h4",{id:"for-version-2004-may-2020-or-later"},(0,l.kt)("strong",{parentName:"h4"},"For version 2004 (May 2020) or later")),(0,l.kt)("p",null,"To install WSL 2 on Windows 10 OS Build 2004 or later you need to open the command prompt app with Administrator permissions, and enter the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"wsl.exe --install\n")),(0,l.kt)("p",null,"Once done, reboot and log in to Windows 10. The command prompt will open again and you\u2019ll be walked through setting up Ubuntu with a username and password (these don\u2019t need to be the same as your Windows username and password though)."),(0,l.kt)("h4",{id:"before-version-2004"},(0,l.kt)("strong",{parentName:"h4"},"Before version 2004")),(0,l.kt)("p",null,"Regardless of which version of WSL you want to use you first need to enable it. To do this open the PowerShell tool as an Administrator and run the command below. Be careful not to mistype or leave out any character in the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart\n")),(0,l.kt)("p",null,"To enable Virtual Machine Platform on Windows 10 (1903, 1909) open PowerShell as Administrator and run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform -NoRestart\n")),(0,l.kt)("p",null,"Open PowerShell as Administrator and run this command to set WSL 2 as the default version of WSL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"wsl --set-default-version 2\n")),(0,l.kt)("p",null,"With WSL and the necessary virtualisation tech all in place all that is left for you to do is pick and install a Linux distro from the Microsoft Store. ",(0,l.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-gb/p/ubuntu-2004-lts/9n6svws3rx71"},"Click here")," to install Ubuntu 20.04 from the Microsoft Store."),(0,l.kt)("h3",{id:"2-install-ros"},"2. Install ROS"),(0,l.kt)("p",null,"Now that WSL is up and running, simply follow the steps for installing ROS on Ubuntu using your Ubuntu WSL instance."))}c.isMDXComponent=!0}}]);