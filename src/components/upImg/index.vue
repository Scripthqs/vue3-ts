<template>
  <div>
    <a-upload
      accept=".jpg,.png,.jpeg"
      :customRequest="(e) => uploadSwiper(e, 1)"
      :file-list="swiperFile"
    >
      <div class="upBox">
        <div class="upBtn">
          <UploadOutlined></UploadOutlined>
          上传文件
        </div>
        <div class="upText">建议尺寸720*350px</div>
      </div>
    </a-upload>

    <a-modal
      v-model:visible="visible"
      title="裁剪"
      @ok="handleOk"
      width="1000px"
    >
      <vueCropper
        style="width: 800px; height: 500px"
        ref="cropper"
        :img="option.img"
        :outputSize="option.size"
        :outputType="option.outputType"
        :canScale="true"
        :info="true"
        :autoCrop="option.autoCrop"
        :autoCropWidth="option.autoCropWidth"
        :autoCropHeight="option.autoCropHeight"
        @imgLoad="imgLoad"
      ></vueCropper>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive, toRef, toRefs } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    UploadOutlined,
  },
  setup() {
    onMounted(() => {});
    const option = reactive({
      img: "",
      size: 1,
      outputType: "jpg",
      full: true,
      canMove: false,
      original: false,
      canMoveBox: true,
      autoCrop: true,
      high: true,
      autoCropWidth: 720,
      autoCropHeight: 350,
      fixedBox: false,
      infoTrue: false,
      downImg: "#",
      fixed: true,
      fixedNumber: [16, 9],
      maxImgSize: 3000, // 图片最大像素
    });

    const fileState = reactive({
      swiperFile: [] as any,
      uploadSwiper: (e: any, index: number) => {
        visible.value = true;
        console.log(e, "未裁剪的文件");
        // $fn.uploadFile(e.file, 'marketingManage', 0).then((res: any) => {
        //   console.log(res, 'res');
        //   fileState.swiperFile[index] = {
        //     name: e.file.name,
        //     url: res.name //保存返回name属性
        //   };
        // });
        option.img =
          "https://gbps-dev.oss-accelerate.aliyuncs.com/gbps/public-read-write/commonManage/1659516460488.jpg";
        option.img =
          "https://www.msn.cn/zh-cn/news/other/iphone-14%E7%B3%BB%E5%88%97%E5%9B%BD%E8%A1%8C%E4%BB%B7%E6%A0%BC%E7%8E%B0%E8%BA%AB%E7%BA%BF%E4%B8%8B%E5%BA%97-%E8%B4%B5%E5%88%B0%E7%A6%BB%E8%B0%B1/ar-AA11t04n?ocid=msedgntp&cvid=d5cfde11b37b4966d2728623f1773b3aing.com/guanjia?channel=303404";
      },
    });

    const visible = ref<boolean>(false);
    const showModal = () => {
      visible.value = true;
    };

    const cropper = ref(null) as any;
    const handleOk = (e: MouseEvent) => {
      console.log(e);
      visible.value = false;
      console.log(cropper.value, "----------------------");
      cropper.value.getCropData((data: any) => {
        // do something
        console.log(data, "base64---------");
      });

      cropper.value.getCropBlob((data: any) => {
        // do something
        console.log(data, "blob************");
      });
    };

    const realTime = (data: any) => {
      console.log(data);
    };

    const imgLoad = (data: any) => {
      console.log(data);
    };
    return {
      option,
      ...toRefs(fileState),
      visible,
      cropper,
      showModal,
      handleOk,
      realTime,
      imgLoad,
    };
  },
});
</script>

<style lang="scss" scoped></style>
