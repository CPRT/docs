# ROS Installation
⚠️ **Before you continue:**
- If at all possible, it is **highly** recommended that you install ROS on a Linux-based operating system.
  - Package and dependency management is much simpler and the install process is much less complex
- Avoid running ROS within a virtual machine, as the performance impact (particularily when running simulations ie. Gazebo) will be fairly significant.
- If you are already running some distribution of Linux ... Great! Install ROS on that. 
- If you are currently running Windows, take a stab at running ROS natively on Windows but be aware that the process is simpler on Linux.

## Ubuntu  
This guide covers the installation process for ROS on Ubuntu. Other Linux distributions should follow a very similar process but refer to the [official installation](https://wiki.ros.org/noetic/Installation) guide to check for any distribution-specific tips.  
Source: https://wiki.ros.org/noetic/Installation/Ubuntu
### 1. Setup sources.list
```bash
sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
```
### 2. Set up your keys
```bash
sudo apt install curl # if you haven't already installed curl
curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
```
### 3. Installation
First, make sure your Debian package index is up-to-date:
```bash
sudo apt update
```
Desktop-Full Install: Everything in Desktop plus 2D/3D simulators and 2D/3D perception packages
```bash
sudo apt install ros-noetic-desktop-full
```
### 4. Environment setup
You must source this script in every bash terminal you use ROS in.
```bash
source /opt/ros/noetic/setup.bash
```
It can be convenient to automatically source this script every time a new shell is launched. These commands will do that for you.

```bash
echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc
source ~/.bashrc
```
### 5. Dependencies for building packages
Up to now you have installed what you need to run the core ROS packages. To create and manage your own ROS workspaces, there are various tools and requirements that are distributed separately. 

To install this tool and other dependencies for building ROS packages, run:
```bash
sudo apt install python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
```
Before you can use many ROS tools, you will need to initialize rosdep. rosdep enables you to easily install system dependencies for source you want to compile and is required to run some core components in ROS. If you have not yet installed rosdep, do so as follows.
```bash
sudo apt install python3-rosdep
```
With the following, you can initialize `rosdep`.
```bash
sudo rosdep init
rosdep update
```
## Windows
If you do choose to install ROS on Windows, be aware that you are more likely to run into snags and issues which might not exist on Linux. If you are ok with that and you think you have what it takes, read on, otherwise consider dual-booting Windows and Linux.

Source: http://wiki.ros.org/Installation/Windows

### 1. Install Visual Studio 2019
- Follow the instructions [here](https://docs.microsoft.com/en-us/cpp/build/vscpp-step-0-installation?view=msvc-160&viewFallbackFrom=vs-2019) to download and install Visual Studio 2019. This installation can take up 10-15GB, so ensure you have enough space.  
- During installation, ensure that `Desktop development with C++` is selected under the "Workloads" tab and under "Individual Components" select `Windows 10 SDK (10.0.19041.0)`.
### 2. Install Chocolately
- Chocolately is the de-facto community package manager for Windows and allow software to be installed with a single command from the console.
1. In the Start Menu, find the `x64 Native Tools Command Prompt for VS 2019` item.
Right Click, select More then "Run as Administrator"
2. Copy the following command line. Paste it into the command window. Approve any prompts.
Once it has completed, close the command prompt to complete the install.
  ```powershell
  @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
  ```

### 3. Install Git
- Reopen the Visual Studio Command Window as described above. Please install Git using the command here, even if you have it installed as an application.
  ```powershell
  choco upgrade git -y
  ```
- After Git installed, ensure Git is now available in the Visual Studio command window.  
    ```bash
    git --version
    ```  
- Close and Reopen the Visual Studio Command Window as described above.

### 4. Binary Package Installation
- To get things started, install the recommended desktop_full metapackage. A Metapackage is a collection of other packages. The Desktop-Full metapackage refers to a number of other packages needed to build, run, debug and visualize a robot.
-  Open the Visual Studio Command Prompt as Administrator as described above.
    ```powershell
    mkdir c:\opt\chocolatey
    set ChocolateyInstall=c:\opt\chocolatey
    choco source add -n=ros-win -s="https://aka.ms/ros/public" --priority=1
    choco upgrade ros-noetic-desktop_full -y --execution-timeout=0
    ```
### 5. Create a ROS Command Window shortcut
- In order to use ROS on Windows, the ROS setup script needs to be called in each command Window. In order to not forget in the future, it is helpful to have a ROS shortcut which does this automatically.

- Create an Administrative command line shortcut for Visual Studio:
Right click in a Windows Explorer folder, select New > Shortcut

- In the shortcut path, copy the highlighted command line from the following options, depending on the Visual Studio install above:
  - If you are using Community:
    ```powershell
    C:\Windows\System32\cmd.exe /k "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\Tools\VsDevCmd.bat" -arch=amd64 -host_arch=amd64&& set ChocolateyInstall=c:\opt\chocolatey&& c:\opt\ros\noetic\x64\setup.bat
    ```
- Name the shortcut "ROS"
- Set that shortcut as Administrator
  - Right Click on the shortcut and choose "Properties".
  - Select the Shortcut Tab if not already selected.
  - Press the Advanced button
  - Check the button "Run as Administrator".
  - Press OK on the Advanced properties dialog.
  - Press OK on the "ROS Properties" shortcut dialog.

### 6. Windows Terminal Support
- If you want to run ROS, under the new Windows Terminal check out the [official documentation](http://wiki.ros.org/Installation/Windows) for how to set that up.

## WSL2 on Windows
**The best of both worlds??? ... Maybe not**  
If you aren't familiar with WSL or the Windows Subsystem for Linux, you're in for a treat. WSL essentially runs a Linux kernel alongside Windows and allows you to install and run Linux applications and even access your Windows filesystem.

New features are frequently being added to WSL, and support is improving but one of the key features holding it back for the time-being is the lack of GPU passthrough support. For this reason, I wouldn't recommend running ROS on WSL but if you don't have a GPU or just want to test it out, its a cool option.
### 1. Install WSL 2
Source: https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10  
First we need to check which build of Windows you are running. Open up a console and run the following command:
```powershell
winver
```
Note the number after "version" in the dialoge that appears. 1607 in this example:
![winver Example](https://www.cnet.com/a/img/CDGwKxcfvP-KcisjAwMB6JZP0TY=/940x0/2017/07/26/b0379d1c-8a80-457e-ad61-debc79ce0b2b/winver-window.jpg)
#### **For version 2004 (May 2020) or later**
To install WSL 2 on Windows 10 OS Build 2004 or later you need to open the command prompt app with Administrator permissions, and enter the following command:
```powershell
wsl.exe --install
```
Once done, reboot and log in to Windows 10. The command prompt will open again and you’ll be walked through setting up Ubuntu with a username and password (these don’t need to be the same as your Windows username and password though).
#### **Before version 2004**
Regardless of which version of WSL you want to use you first need to enable it. To do this open the PowerShell tool as an Administrator and run the command below. Be careful not to mistype or leave out any character in the command:
```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
To enable Virtual Machine Platform on Windows 10 (1903, 1909) open PowerShell as Administrator and run:
```powershell
Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform -NoRestart
```
Open PowerShell as Administrator and run this command to set WSL 2 as the default version of WSL:
```powershell
wsl --set-default-version 2
```
With WSL and the necessary virtualisation tech all in place all that is left for you to do is pick and install a Linux distro from the Microsoft Store. [Click here](https://www.microsoft.com/en-gb/p/ubuntu-2004-lts/9n6svws3rx71) to install Ubuntu 20.04 from the Microsoft Store.
### 2. Install ROS
Now that WSL is up and running, simply follow the steps for installing ROS on Ubuntu using your Ubuntu WSL instance.