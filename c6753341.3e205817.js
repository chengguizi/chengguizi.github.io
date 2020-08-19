(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(6),r=(a(0),a(140)),o={hide_title:!0,sidebar_label:"Basalt Backend (vioestimator)"},s={unversionedId:"research/vio/basalt-backend",id:"research/vio/basalt-backend",isDocsHomePage:!1,title:"basalt-backend",description:"Basalt Backend Walkthrough",source:"@site/docs/research/vio/basalt-backend.md",permalink:"/docs/research/vio/basalt-backend",editUrl:"https://github.com/chengguizi/chengguizi.github.io/docs/research/vio/basalt-backend.md",lastUpdatedAt:1597829776,sidebar_label:"Basalt Backend (vioestimator)",sidebar:"researchSidebar",previous:{title:"verify-calibration",permalink:"/docs/research/calibration/verify-calibration"},next:{title:"basalt-frontend",permalink:"/docs/research/vio/basalt-frontend"}},l=[{value:"Overview &amp; Class Names",id:"overview--class-names",children:[]},{value:"I/O of Base Class of VioEstimator",id:"io-of-base-class-of-vioestimator",children:[]},{value:"Initialisation",id:"initialisation",children:[]},{value:"The Processing Thread (within <code>KeypointVioEstimator</code>)",id:"the-processing-thread-within-keypointvioestimator",children:[]},{value:"The <code>Measure()</code> Routine",id:"the-measure-routine",children:[{value:"IMU measurements Processing",id:"imu-measurements-processing",children:[]},{value:"Optical Flow Results Processing",id:"optical-flow-results-processing",children:[]}]}],c={rightToc:l};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"basalt-backend-walkthrough"},"Basalt Backend Walkthrough"),Object(r.b)("h2",{id:"overview--class-names"},"Overview & Class Names"),Object(r.b)("p",null,"The backend of the VIO framework is contained with the base class ",Object(r.b)("inlineCode",{parentName:"p"},"VioEstimatorBase")," (defined in ",Object(r.b)("inlineCode",{parentName:"p"},"vio_estimator.h"),") which is the parent class of two type of the estimator possible:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"KeypointVioEstimator"),"(defined in ",Object(r.b)("inlineCode",{parentName:"li"},"keypoint_vio.h"),"), and"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"KeypointVoEstimator"),"(defined in ",Object(r.b)("inlineCode",{parentName:"li"},"keypoint_vo.h"),")")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// how the factory class initialise to different type of estimator depends on use_imu variable\nVioEstimatorBase::Ptr VioEstimatorFactory::getVioEstimator(\n    const VioConfig& config, const Calibration<double>& cam,\n    const Eigen::Vector3d& g, bool use_imu) {\n  VioEstimatorBase::Ptr res;\n\n  if (use_imu) {\n    res.reset(new KeypointVioEstimator(g, cam, config));\n  } else {\n    res.reset(new KeypointVoEstimator(cam, config));\n  }\n\n  return res;\n}\n")),Object(r.b)("p",null,"For the purpose of this walkthrough honly ",Object(r.b)("inlineCode",{parentName:"p"},"KeypointVioEstimator")," is conerned. We are interested in understanding how optical flow observations (keypoints) are used to form keyframes, and 3D landmarks."),Object(r.b)("h2",{id:"io-of-base-class-of-vioestimator"},"I/O of Base Class of VioEstimator"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"inputs")," are optical results (observations of keypoints) and imu inputs:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"A TBB queue, ",Object(r.b)("inlineCode",{parentName:"li"},"vision_data_queue")," of type ",Object(r.b)("inlineCode",{parentName:"li"},"OpticalFlowResult::Ptr"),", where each optical flow result contains ",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"the 64-bit timestamp,"),Object(r.b)("li",{parentName:"ol"},"a vector named ",Object(r.b)("inlineCode",{parentName:"li"},"observations"),", containing a map between the keypoint ID ",Object(r.b)("inlineCode",{parentName:"li"},"KeypointId"),"  and its 2D transformations ",Object(r.b)("inlineCode",{parentName:"li"},"Eigen::AffineCompact2f")," (2D transformation literally represent the keypoint 2D location in the observing camera frame, aka. the uv coordinates)"),Object(r.b)("li",{parentName:"ol"},"and a pointer to the original image data (",Object(r.b)("inlineCode",{parentName:"li"},"std::vector<ImageData>"),"), for the current frame"))),Object(r.b)("li",{parentName:"ol"},"A TBB queue, ",Object(r.b)("inlineCode",{parentName:"li"},"imu_data_queue")," of type ",Object(r.b)("inlineCode",{parentName:"li"},"ImuData::Ptr"),", storing the timestamp, and the accelerometer and gyroscope information")),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"outputs")," are output states, \u26a0\ufe0f marginalised data?, and vio visualisation data:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"A pointer to TBB queue ",Object(r.b)("inlineCode",{parentName:"li"},"out_state_queue")," of type ",Object(r.b)("inlineCode",{parentName:"li"},"PoseVelBiasState::Ptr")," containing all the states which are: ",Object(r.b)("inlineCode",{parentName:"li"},"t_ns")," timestamp of the state in nanoseconds; ",Object(r.b)("inlineCode",{parentName:"li"},"T_w_i")," pose of the state; ",Object(r.b)("inlineCode",{parentName:"li"},"vel_w_i")," linear velocity of the state; ",Object(r.b)("inlineCode",{parentName:"li"},"bias_gyro")," gyroscope bias; ",Object(r.b)("inlineCode",{parentName:"li"},"bias_accel  "),"accelerometer bias."),Object(r.b)("li",{parentName:"ol"},"A pointer to TBB queue ",Object(r.b)("inlineCode",{parentName:"li"},"out_marg_queue")," of type ",Object(r.b)("inlineCode",{parentName:"li"},"MargData::Ptr")),Object(r.b)("li",{parentName:"ol"},"A pointer to TBB queue",Object(r.b)("inlineCode",{parentName:"li"},"out_vis_queue")," of type ",Object(r.b)("inlineCode",{parentName:"li"},"VioVisualizationData::Ptr"))),Object(r.b)("h2",{id:"initialisation"},"Initialisation"),Object(r.b)("p",null,"With the incoming flow of visual optical flow observations and IMU data, the backend has a way to initialise itself with a proper initial pose (and velocity) and bias estimate. We can choose to initialise either just the biases and attitude (quaternion), or with the transformation and velocity as well."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Key things to note:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The current implementation in Basalt only does bias and quaternion initialisation (all others set): bias is ",Object(r.b)("u",null,"set them to zero"),", and attitude is done by two-vector calculation from single data point of imu -> ",Object(r.b)("strong",{parentName:"li"},"TODO ","[Improvement]")),Object(r.b)("li",{parentName:"ul"},"The initial IMU-world transformation ",Object(r.b)("inlineCode",{parentName:"li"},"T_w_i_init")," has a very special way to initialise, which is yaw ignorant:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"First the accelerometer raw reading is used (one data point), it is assumed to be the gravity vector"),Object(r.b)("li",{parentName:"ul"},"The gravity vector is rotated to be aligned with the positive Z axis, this rotation action is recorded as a quaternion. This quaternion is essentially performing basis changing from body frame to global frame."),Object(r.b)("li",{parentName:"ul"},"That is to say, the transformation is only defined by the plane that the gravity vector and the +ve z-axis make as well as the angle itself. This does not take account into the correct yaw, a.k.a the initial heading is not consistent, which is a function of how the IMU is mounted and its initial orientation."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"NOTE"),": Therefore, with a fixed mounting between the IMU and camera, and with a fixed up direction of the whole rig (e.g. the drone), we can pre-calculate the rotation matrix to make the initialised ",Object(r.b)("span",Object(n.a)({parentName:"li"},{className:"math math-inline"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(r.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("mi",{parentName:"mrow"},"T")),Object(r.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"T")))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.13889em"}}),"T")))))," transformation matrix to face our desired coordinate convention (e.g. NWU)."))),Object(r.b)("li",{parentName:"ul"},"The pre-integration buffer ",Object(r.b)("inlineCode",{parentName:"li"},"imu_meas")," is also initialised here, taken account of the bias (which is always set to zeros in the implementation)"),Object(r.b)("li",{parentName:"ul"},"The bundle adjustment states ",Object(r.b)("inlineCode",{parentName:"li"},"frame_states")," of type ",Object(r.b)("inlineCode",{parentName:"li"}," Eigen::aligned_map<int64_t, PoseVelBiasStateWithLin>")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"marg_order"),"??"),Object(r.b)("li",{parentName:"ul"},"The processing thread is created within the ",Object(r.b)("inlineCode",{parentName:"li"},"initialize()")," function, which is basically a ",Object(r.b)("strong",{parentName:"li"},"while")," loop, by the means of lamda function and ",Object(r.b)("inlineCode",{parentName:"li"},"std::thread"),".")),Object(r.b)("h2",{id:"the-processing-thread-within-keypointvioestimator"},"The Processing Thread (within ",Object(r.b)("inlineCode",{parentName:"h2"},"KeypointVioEstimator"),")"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Configs"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"vio_enforce_realtime")," is used to set when the backend cannot catch up with optical flow results. It will throw away all previous results, except the latest one in the queue."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),'if (config.vio_enforce_realtime) {\n        // drop current frame if another frame is already in the queue.\n        while (vision_data_queue.try_pop(curr_frame)) {skipped_image++;}\n        if(skipped_image)\n          std::cerr<< "[Warning] skipped opt flow size: "<<skipped_image<<std::endl;\n      }\n      if (!curr_frame.get()) {\n        break;\n      }\n')))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"vio_min_triangulation_dist")," is used to determine whether the two camera frames are suitable for triangulation in generating the landmarks, during a keyframe initialisation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"vio_new_kf_keypoints_thresh")," is the threshold for the ratio between tracked landmarks and total tracked keypoints (e.g. raito of 0.7)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"vio_min_frames_after_kf")," "))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Calibs"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"cam_time_offset_ns")," offset of the camera in time, should be normally 0"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// Correct camera time offset\n      curr_frame->t_ns += calib.cam_time_offset_ns;\n")))),Object(r.b)("p",null,"After initialisation, the actual processing will only start with two concecutive frames (when both ",Object(r.b)("inlineCode",{parentName:"p"},"prev_frame")," and ",Object(r.b)("inlineCode",{parentName:"p"},"curr_frame")," are defined):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Pre-integration is performed, between the two frames, using the latest bias estimation. Blocking may happen, as it reads IMU buffer all the way until one pass the current frame's timestamp (",Object(r.b)("inlineCode",{parentName:"li"},"while (data->t_ns <= curr_frame->t_ns)"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Note: the integration will ensure the upper integral timestamp is at least the current frame timestamp (it will make fake IMU measurement by shifting the last IMU readings, when needed)"))),Object(r.b)("li",{parentName:"ul"},"At the same time, bias correction ",Object(r.b)("inlineCode",{parentName:"li"},"getCalibrated()")," are also done for both gyro and accelerometer"),Object(r.b)("li",{parentName:"ul"},"The bulk of the calculation is doen within the ",Object(r.b)("inlineCode",{parentName:"li"},"measure(curr_frame, meas)")," function, which is discussed next")),Object(r.b)("h2",{id:"the-measure-routine"},"The ",Object(r.b)("inlineCode",{parentName:"h2"},"Measure()")," Routine"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"measure()")," routine takes in the current frame optical flow observations, as well as the IMU pre-integration results."),Object(r.b)("h3",{id:"imu-measurements-processing"},"IMU measurements Processing"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"frame_states")," is updated with a entry key ",Object(r.b)("inlineCode",{parentName:"li"},"last_state_t_ns")," (current frame timestamp), to be stored with the IMU predicted state"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"imu_meas")," is also updated by indexed by the previous frame's timestamp"),Object(r.b)("li",{parentName:"ul"},"This whole step might be skipped if IMU measurement is not passed in")),Object(r.b)("h3",{id:"optical-flow-results-processing"},"Optical Flow Results Processing"),Object(r.b)("p",null,"Pre-processing:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"prev_opt_flow_res")," stores, with key in timestamp, the optical flow measurement struct pointer, up to the current time frame")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"For each camera frame, iterate through all observations. If that observed keypoint is already a landmark, add the observation to the landmark database; if not put it to the unconnected observation ",Object(r.b)("strong",{parentName:"p"},"set"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// skeleton\nfor (size_t i = 0; i < opt_flow_meas->observations.size(); i++)\n    for (const auto& kv_obs : opt_flow_meas->observations[i])\n        if (lmdb.landmarkExists(kpt_id)){\n            num_points_connected[tcid_host.frame_id]++;\n        }else{\n            unconnected_obs0.emplace(kpt_id);\n        }\n")))),Object(r.b)("p",null,"Key-framing:"))}b.isMDXComponent=!0},140:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||r;return a?i.a.createElement(u,s(s({ref:t},c),{},{components:a})):i.a.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);