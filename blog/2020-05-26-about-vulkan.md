---
id: about-vulkan
title: About Vulkan and Future of High Performance Computing
author: Huimin C.
author_url: https://github.com/chengguizi
tags: [DL,embedded,framework]
---

## Towards a heterogeneous & parallel computing architecture

OpenCL and Vulkan in the future would [probably](https://pcper.com/2017/05/breaking-opencl-merging-roadmap-into-vulkan/) become the same thing. [[1]](https://github.com/KhronosGroup/Vulkan-Ecosystem/issues/42#issuecomment-450966378)[[2]](https://www.phoronix.com/scan.php?page=news_item&px=Vulkan-OpenCL-Interop-2019)

To utilise the power of Vulkan (and OpenCL) we do not have to code it our own, espectially for the purpose of deep learning.

By the way, some framework utilise OpenGL (Compute Shader API) as well, a higher level API.

Mali-G series GPU supports [OpenCL 2.0 full profile](https://en.wikipedia.org/wiki/Mali_(GPU)).

<!--truncate-->

## Good Reads for Mobile DL

Neural Network Inference on Mobile SoCs
https://arxiv.org/pdf/1908.11450.pdf

A First Look at Deep Learning Apps on Smartphones
https://arxiv.org/pdf/1812.05448.pdf

AI Benchmark: Running Deep Neural Networks on Android Smartphones
https://arxiv.org/pdf/1810.01109.pdf

- good review of the SoCs (Hardware Acceleration, different SDKs)



## Chips for Consideration



### without NPUs

**NXP** 

iMX6 or iMX8 - popular for general and multimedia usage.


### with NPUs

**Amlogic**

Amlogic A331D (with NPU) (Khadas VIM3)

Amlogic S922X (ODROID-N2)

Their own [SDK](https://www.cnx-software.com/2020/01/13/getting-started-with-amlogic-npu-on-khadas-vim3-vim3l/)

[Board manufacturer](https://www.khadas.com/vim)
![](https://static.wixstatic.com/media/04a2a6_e620b55023224a4faeff88c5bf540edb~mv2.jpg/v1/fill/w_395,h_394,al_c,q_80,usm_0.66_1.00_0.01/vim3.webp)

No known popular usage.

**RockChip**

Popular chip used in hobbists and multimedia products. Contribute significantly to open source community.

RockChip is upgrading their product line [this year 2020](https://www.96rocks.com/blog/2019/11/25/rockchip-2020-roadmap-update/) with RK3588. their flagship RK3399 is getting dated. To be equipped with NPUs.

*RK1808, RK1806 are supported by Baidu Paddle.* Only single camera input is supported.

**MediaTek(APU)**

MT8168, MT8175 (Mali G52, with APU 0.3TOPS, 2 CSI camera interface)
- only chips available?

[MediaTek NeuroPilot SDK (Andriod only)](https://www.mediatek.com/innovations/artificial-intelligence)

*Supported by Baidu Paddle using API conversion.*

Newer series

MediaTek helio
- P60 280GMAC/s
- P90 APU 2.0 @  1165GMAC/s


*No available development boards*

**Kirin**

Kirin970 and Kirin980 uses Cambricon Technologies. (supported by HiAI DDK(v100), but only Andriod?)
Kirin 810 and 820 and Kirin 990 uses Da Vinci NPU

*Da Vinci NPU is supported by [Baidu Paddle](https://paddle-lite.readthedocs.io/zh/latest/demo_guides/npu.html) using API conversion.* No development board available.

**HiSilicon**

Hi3516A(V300) - NNIE 1.0 TOPS (ARM A7)

Hi3519A(V100) - NNIE 2.0 TOPS @ 2W (ARM A53) [Taobao](http://www.tongyetech.com/product_service.html)

![](https://img.alicdn.com/img/bao/uploaded/i4/i3/4019831782/O1CN01HqBoiP1P2CMWRPFND_!!4019831782.png_540x540Q50s50.jpg)

Hi3559A(V100) - Dual [NNIE](http://www.hisilicon.com/en/Media-Center/News/CES2018_hisilicon_hi3559a_AI)@840MHz (much more powerful CPU, ARM A73 + A53) [Taobao (huge size)](https://item.taobao.com/item.htm?spm=a230r.1.14.35.2ea1402fLbEjiT&id=596309235525&ns=1&abbucket=4#detail)

![](https://pic4.zhimg.com/80/v2-d838c6d5739b10d3d9660490087da6dd_720w.jpg)

![](https://pic4.zhimg.com/80/v2-02b4e71d79f75f962c5daa52c32e9b17_720w.jpg)

http://www.hisilicon.com/en/Products/ProductList/Camera

[Custom SDK](https://blog.csdn.net/zh8706/article/details/94554337) May not be easy to use.

[Benchmark](https://blog.csdn.net/zh8706/article/details/100040675)
[Other Blog](https://blog.csdn.net/yunge812/article/details/103938693) Yolov3 8fps, slightly better than TX1? Inferior than TX2.

**Horizon Robotics**

BOOTPRINT X2 96Boards ( Sunrise 2.0 AI edge processor - 4 TOPS@2W )

![](https://www.cnx-software.com/wp-content/uploads/2019/11/BOOTPRINT-X2.jpg)

*Uncertainty facing a start-up product*

### Bottomline

- Current Multimedia SoC are adding in NPUs quickly, but with custom SDKs mainly
- Start up SoC is still largely uncertain its sustainability
- Do no expect too much from the built-in NPU performance. More like a off-loading.

## DL Framework Comparisons

overview of mobile DL framwork: https://easyai.tech/blog/10-mobil-deeplearning-frame/

嵌入式Linux平台部署AI神经网络模型Inference的方案 https://www.jianshu.com/p/d4425b65c6e6

Future of GPU-based High Performance Computing (NPU to replace GPU) https://zhuanlan.zhihu.com/p/114254288

### Tensorflow Lite

#### Not Recommaned
Mainly focused on Andriod and iOS, so not so friendly for our Robotics use, less documentation and popularity.

[Blog: TensorFlow Lite Now Faster with Mobile GPUs](https://blog.tensorflow.org/2019/01/tensorflow-lite-now-faster-with-mobile.html) This blog shows that only Andriod and iOS are officially supported (basically what Google has in mind).

Note: the full version of Tensorflow could run on with custom compilation from source. [GitHub](https://github.com/lhelontra/tensorflow-on-arm) No Official support, and it is probably CPU-only.


### PyTorch

Not Possible: Requires CUDA as the sole option for dependencies.

### Paddle-Lite by Baidu

![](https://avatars3.githubusercontent.com/u/23534030?s=200&v=4)

#### Key Features
- Official support Mali GPU (OpenCL), Andreno GPU, Apple Metal GPU
- Official support Kirin NPU, MTK APU, RK NPU
- Future support includes Cambricon and Bitmain
- Available in both Lite and Full (CUDA) version, tested on Jetson TX2
- Support Yolov3 since version 2.0 (launched in late 2019)
- 5K GitHub Stars, QQ support group 696965088
- Tons of [improments and tricks](https://blog.csdn.net/PaddlePaddle/article/details/104912335) and tools like [x2paddle](https://paddle-lite.readthedocs.io/zh/latest/user_guides/x2paddle.html)
  ![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9zS2lhMUZLRmlhZmdpYXk3SjhqaWNUYm05M3lZd0tjM2xiOW04WWd0ZGhQc0hUUncwSGVRYWljYUtrRXNpY05CUFhLa3ZHRFlCMXhUSDIwblNPcnVTVGdLRklxUS82NDA?x-oss-process=image/format,png)

#### Key Drawbacks
- Still transiting older versions of Paddle-Mobile to the rebranded Paddle-Lite
- Reported that documentation is not friendly, for starting. (Refering to version 1, not sure if version 2 improved) [Zhihu](https://www.zhihu.com/question/341980046), [Developer Reply](https://www.zhihu.com/question/341980046/answer/799827299)

[Paddle-Lite benchmark](https://paddlepaddle.github.io/Paddle-Lite/develop/benchmark/), 
[Paddle-Lite Demo](https://github.com/PaddlePaddle/Paddle-Lite-Demo), 
[Release Blog](https://zhuanlan.zhihu.com/p/103082836)

#### Bottom Line

- Interesting framework to test Kirin NPU (Kirin 970 1.92TFLOPs) and RK NPU (RK1808, RK1806，not currently RK3399Pro) performance. However, currently those chips are not miniturisable.
- Hi35xx chips (Hi3559A NPU: Dual core NNIE; Hi3516A, 2TOPS) not supported, probably need to use NNIE instead (takes in caffe format)
- Still good to use it for complete GPU support


<!-- 
| Framework          | Affiliation | CUDA Support | ARM GPU Support | NPU Support | OpenGL & Vulkan | Linux Support | Publication | Benchmark |
| ------------------ | ----------- | ------------ | ------------- | ------------ | --------------- | ----------- | ----------- | --------- |
| Paddle(-Lite) 飞桨 | Baidu       | |               |              |                 |             |             |           | -->

### NCNN by Tencent

![](https://raw.githubusercontent.com/Tencent/ncnn/master/images/256-ncnn.png)

#### Key Features
- Design to be light-weight (library <1MB)
- Optimised memory access, written all in C++
- ARM NEON Assembly optimisation, ARM big.LITTLE CPU optimisation
- Utilise [VulKan API](https://github.com/Tencent/ncnn/wiki/FAQ-ncnn-vulkan), for GPU acceleration
- Support import from caffe/pytorch/mxnet/onnx
- QQ Support Group: 637093648


#### Key Drawbacks
- Focused on Android platform, many users. *But on Linux platform untested.*
  ![https://blog.csdn.net/yuanlulu/article/details/87902106](https://img-blog.csdnimg.cn/20190224124039169.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3l1YW5sdWx1,size_16,color_FFFFFF,t_70)
- Compilation instruction includes Hisilicon (Hi35xx) and Arm64, but not sure if GPU acceleration and NPU acceleration is enabled

Tencent NCNN claims that their CPU optimisation is quite good (**fastest among open-sourced ones**), might even outperform the built-in GPU


#### Bottomline
- Claimes to be fast, with good CPU optimisation
- could be a good GPU benchmark as well (using Vulkan instead of OpenCL)

[MaliG72](https://github.com/Tencent/ncnn/wiki/vulkan-conformance-test) looking good with ncnn

### MNN by Alibaba
[Publication](https://arxiv.org/pdf/2002.12418.pdf)
![](https://github.com/alibaba/MNN/raw/master/doc/banner.png)


#### Key Features
- Claimed CPU assembly optimisation
- Android: OpenCL, Vulkan, OpenGL support (**very comprehensive!**)
- Appear to support ordinary Linux too, from [doc](https://www.yuque.com/mnn/en/build_linux)
- Lightweight
- Support Tensorflow, Tensorflow Lite, Caffe and ONNX (PyTorch/MXNet)
- Feels to be [research oriented](https://www.alibabacloud.com/blog/alibaba-open-source-and-lightweight-deep-learning-inference-engine---mobile-neural-network-mnn_595318)

![Roadmap](https://cdn.nlark.com/yuque/0/2020/png/547206/1588926160169-1ff710f0-c56e-466c-beed-48f0e2e959cd.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_10%2Ctext_QWxpYmFiYQ%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fresize%2Cw_1282)

#### Key Drawbacks

- Just released as open source (2019?) (semi-automated search architecture for better mobile deployment)
- The features looks too good to be ture. But lets hope for the best.

#### Bottomline

- The paper is worth reading
- A new option with good potential

[blog](https://zhuanlan.zhihu.com/p/96022321)

### MXNet by Amazon
https://github.com/apache/incubator-mxnet

![](https://raw.githubusercontent.com/dmlc/web-data/master/mxnet/image/mxnet_logo_2.png)




#### Key Features
- Used in Universities to teach deep learning classes (Famous book: dive into deep learning)
- Great documentation, looks easy to get started with Python
- Integration with TVM


#### Key Drawbacks
- seems no support for ARM GPU or NPU
- Comparison with tvm, from [tvm blog](https://tvm.apache.org/2018/01/16/opt-mali-gpu) back in 2018. Results not good for MXNet.
  ![](https://tvm.apache.org/images/opt-mali/end2end.png)

#### Bottomline
- Not for us. It is for bigger machines, cluster of machines.

### Mace by Xiaomi

Not recommanded.

- Does not support CUDA
- Does not support popular Raspberry Pi
- Hard to find non-Andriod documentation.
- Xiaomi's strength is in Quadcomm CPUs
- Not as a big community using it

### Tengine by OPEN AI Lab (Supported by ARM)

https://github.com/OAID/Tengine

Not recommended. only ARM CPU acceleration? But claim to be fast?

### ARM NN

Not recommended. Should not go here, again, platform dependent!

It should be based on ARM Compute Library.

### SenseTime Parrots (PPL)

Closed source, but claim to have the best performance among the commercial solutions.

## TVM (An Aggressive Step: Auto Tuning)

[TVM paper](https://dl.acm.org/doi/pdf/10.1145/3229762.3229764?download=true)

#### Key Features
- Support ARM GPU (uda, opencl or vulkan backend)
- Could add custom accelerator support through VTA (e.g. FPGA)
- Machine Learning the best combination to utilise the heterogeneous hardware

#### Key Drawbacks
- Might be too many things varying at the same time, hard to debug?

Integrating TVM into PyTorch
https://tvm.apache.org/2019/05/30/pytorch-frontend

云天励飞基于TVM
https://zhuanlan.zhihu.com/p/91826247
https://www.intellif.com/int/product/list15.html

Optimizing Mobile Deep Learning on ARM GPU with TVM
https://tvm.apache.org/2018/01/16/opt-mali-gpu


A Unified Optimization Approach for CNN Model Inference on Integrated GPUs
https://arxiv.org/pdf/1907.02154.pdf