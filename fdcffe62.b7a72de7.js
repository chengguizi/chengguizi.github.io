(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),l=(n(0),n(140)),o={hide_title:!0,sidebar_label:"Post-flashing Dos"},r={unversionedId:"hardware/jetson/tx2-post-flashing",id:"hardware/jetson/tx2-post-flashing",isDocsHomePage:!1,title:"tx2-post-flashing",description:"Post-flashing Dos",source:"@site/docs/hardware/jetson/tx2-post-flashing.md",permalink:"/docs/hardware/jetson/tx2-post-flashing",editUrl:"https://github.com/chengguizi/chengguizi.github.io/docs/hardware/jetson/tx2-post-flashing.md",lastUpdatedAt:1597829776,sidebar_label:"Post-flashing Dos",sidebar:"tx2Sidebar",previous:{title:"mount-image-as-loopback",permalink:"/docs/hardware/jetson/mount-image-as-loopback"},next:{title:"uart-setup",permalink:"/docs/hardware/jetson/uart-setup"}},c=[{value:"Check L4T and Jetpack version",id:"check-l4t-and-jetpack-version",children:[]},{value:"Install Absolute Dependencies",id:"install-absolute-dependencies",children:[]},{value:"Downgrade OpenCV",id:"downgrade-opencv",children:[]},{value:"Install Optional Dependencies",id:"install-optional-dependencies",children:[]},{value:"Python Dependencies",id:"python-dependencies",children:[]},{value:"Convenience",id:"convenience",children:[]},{value:"Tools",id:"tools",children:[]},{value:"Hardware / Kernel",id:"hardware--kernel",children:[]},{value:"Web Applications",id:"web-applications",children:[]},{value:"OpenCV 4 from Source",id:"opencv-4-from-source",children:[]}],b={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"post-flashing-dos"},"Post-flashing Dos"),Object(l.b)("p",null,"(TX2 Platform for ROS-Robotics)"),Object(l.b)("h2",{id:"check-l4t-and-jetpack-version"},"Check L4T and Jetpack version"),Object(l.b)("p",null,"-",Object(l.b)("inlineCode",{parentName:"p"},"cat /etc/nv_tegra_release"),", e.g. R32.3.2 is the L4T Version"),Object(l.b)("h2",{id:"install-absolute-dependencies"},"Install Absolute Dependencies"),Object(l.b)("ol",{start:0},Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"sudo apt update")," to the latest"),Object(l.b)("li",{parentName:"ol"},"Install CUDA and cuDNN etc. from Nvidia SDK Manager, over the USB Cable (check install by ",Object(l.b)("inlineCode",{parentName:"li"},"nvcc --version")," and ",Object(l.b)("inlineCode",{parentName:"li"},"~/.bashrc")," export 2 lines are there)"),Object(l.b)("li",{parentName:"ol"},"Install ROS, and ",Object(l.b)("inlineCode",{parentName:"li"},"apt install python-catkin-tools python-rosdep"),"; do ",Object(l.b)("inlineCode",{parentName:"li"},"sudo rosdep init")),Object(l.b)("li",{parentName:"ol"},"Setup SD Card ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/fstab")),Object(l.b)("li",{parentName:"ol"},"Add user ",Object(l.b)("inlineCode",{parentName:"li"},"nvidia")," to dialout group, to access tty serial port normally"),Object(l.b)("li",{parentName:"ol"},"Install pytorch and torchvision"),Object(l.b)("li",{parentName:"ol"},"Install ZED SDK"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"sudo apt install ros-melodic-mavlink"))),Object(l.b)("h2",{id:"downgrade-opencv"},"Downgrade OpenCV"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"For new Jetpack, the OpenCV version is 4.1+. Whereas ROS 1 needs Version 3.x to function. Hence, downgrade by using Nvidia's SDK Manager's .deb file , e.g. ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"libopencv_3.3.1-2-g31ccdfe11_arm64.deb")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"libopencv-dev_3.3.1-2-g31ccdfe11_arm64.deb")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"libopencv-python_3.3.1-2-g31ccdfe11_arm64.deb")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"libopencv-samples_3.3.1-2-g31ccdfe11_arm64.deb"))))),Object(l.b)("h2",{id:"install-optional-dependencies"},"Install Optional Dependencies"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"For Pangolin OpenGL Display",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"sudo apt install libgl1-mesa-dev libglew-dev")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"sudo apt install libegl1-mesa-dev libwayland-dev libxkbcommon-dev wayland-protocols")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"sudo python -mpip install numpy pyopengl Pillow pybind11")))),Object(l.b)("li",{parentName:"ol"},"librealsense for Jetson from ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/IntelRealSense/librealsense/blob/master/doc/installation_jetson.md"}),"official"))),Object(l.b)("h2",{id:"python-dependencies"},"Python Dependencies"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pip install --upgrade pip"),", same to pip3"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pip install")," and ",Object(l.b)("inlineCode",{parentName:"li"},"pip3 install")," the following",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"cpython (may try ",Object(l.b)("inlineCode",{parentName:"li"},"pip install --upgrade"),")"),Object(l.b)("li",{parentName:"ul"},"numpy"),Object(l.b)("li",{parentName:"ul"},"scipy (need ",Object(l.b)("inlineCode",{parentName:"li"},"gfortran")," compiler)")))),Object(l.b)("h2",{id:"convenience"},"Convenience"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Add right-click to create new file: ",Object(l.b)("inlineCode",{parentName:"li"},"touch ~/Templates/Empty\\ Document")),Object(l.b)("li",{parentName:"ol"},"Add system monitor applet at status bar (gnome extension)"),Object(l.b)("li",{parentName:"ol"},"Setting of power button to shutdown without prompt of 60 seconds"),Object(l.b)("li",{parentName:"ol"},"Do not blank screen display")),Object(l.b)("h2",{id:"tools"},"Tools"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Install VS Code"),Object(l.b)("li",{parentName:"ol"},"Install Samba"),Object(l.b)("li",{parentName:"ol"},"Install git, and configure timeout for asking password ",Object(l.b)("inlineCode",{parentName:"li"},"git config --global credential.helper 'cache --timeout=300'")),Object(l.b)("li",{parentName:"ol"},"catkin build, make it default Release mode ",Object(l.b)("inlineCode",{parentName:"li"},"catkin config --cmake-args -DCMAKE_BUILD_TYPE=Release"))),Object(l.b)("h2",{id:"hardware--kernel"},"Hardware / Kernel"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Increase USBFS buffer size (uboot at /boot/extlinux/extlinux.conf)")),Object(l.b)("h2",{id:"web-applications"},"Web Applications"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Nodejs and yarn"),Object(l.b)("li",{parentName:"ol"},"Nginx ",Object(l.b)("inlineCode",{parentName:"li"},"sudo apt install nginx"))),Object(l.b)("h2",{id:"opencv-4-from-source"},"OpenCV 4 from Source"),Object(l.b)("ol",{start:0},Object(l.b)("li",{parentName:"ol"},"It is required, if contrib features of OpenCV is to be used. Does not come with shipped .deb"),Object(l.b)("li",{parentName:"ol"},"build it from source, using a external ext4 disk drive, as large space is needed"),Object(l.b)("li",{parentName:"ol"},"for TX2, the ",Object(l.b)("inlineCode",{parentName:"li"},"CUDA_ARCH_BIN")," version is 6.2")))}p.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||l;return n?i.a.createElement(m,r(r({ref:t},b),{},{components:n})):i.a.createElement(m,r({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var b=2;b<l;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);