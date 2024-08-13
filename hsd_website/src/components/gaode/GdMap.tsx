'use client'
import { useEffect } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";

export default function MapContainer() {


  useEffect(() => {
    let map: any = null
    AMapLoader.load({
      key: "011245dcac10581837523d20bc66c0fd", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        const centerPoint = [116.434833, 39.948550]

        map = new AMap.Map("container", {
          // 设置地图容器id
          viewMode: "2D", // 是否为3D地图模式
          pitch: 0, // 地图俯仰角度，有效范围 0 度- 83 度
          zoom: 16, // 初始化地图级别
          center: centerPoint, // 初始化地图中心点位置
        });

        function createInfoWindow(content: any, closePicSrc?: any) {
          let info = document.createElement("div");
          info.style.width = "100px";//宽度设置
          let middle = document.createElement("div");// 定义中部内容
          middle.innerHTML = content;
          info.appendChild(middle);
          return info
        }
        // 信息窗口
        const renderWindow = [
          `<div style="background-color:white;padding:10px">
            <h4 style="font-size:14px;color:gray">深圳市福田区皇岗公园⼀街</h4>
            <p style="margin-top:4px;color:gray">深圳市云顶学校精英教育招⽣办D101</p>
          </div>`
        ]
        // 点标记
        let marker = new AMap.Marker({
          position: centerPoint, // 基点位置
          title: '',
          offset: new AMap.Pixel(0, -10)
        });
        // 信息窗口挂载
        let infoWindow = new AMap.InfoWindow({
          isCustom: true,
          content: renderWindow.join("<br>"),
          offset: new AMap.Pixel(0, -50)
        })
        map.add(marker)
        infoWindow.open(map, centerPoint)
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {
      map?.destroy();
    };
  }, []);



  return (
    <div id="container" style={{ width: '100%', height: "100%" }}></div>
  );
}
