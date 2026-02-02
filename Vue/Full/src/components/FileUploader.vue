<template>
  <b-form
    action="/"
    method="post"
    class="dropzone"
    id="myAwesomeDropzone"
    v-bind="getRootProps()"
  >
    <div class="fallback">
      <input name="file" v-bind="getInputProps()" @change="onChange" />
    </div>

    <div class="dz-message needsclick">
      <div class="avatar-lg mx-auto mb-3">
        <span class="avatar-title bg-info-subtle text-info rounded-circle">
          <Icon icon="lucide:cloud-upload" class="fs-24 ti ti-cloud-upload" />
        </span>
      </div>
      <h4 class="mb-2">Drop files here or click to upload.</h4>
      <p class="text-muted fst-italic mb-3">
        You can drag images here, or browse files via the button below.
      </p>
      <button type="button" class="btn btn-sm shadow btn-default">
        Browse Images
      </button>
    </div>
  </b-form>

  <div
    v-if="state.files.length > 0"
    class="dropzone-previews mt-3"
    id="uploadPreviewTemplate"
  >
    <div
      v-for="(file, index) in state.files"
      :key="file.name + index"
      class="card mb-1 shadow-none border border-dashed"
    >
      <div class="p-2">
        <BRow class="align-items-center">
          <BCol class="col-auto">
            <img
              :src="file.previewUrl"
              class="avatar-sm rounded bg-light"
              alt="preview"
            />
          </BCol>

          <BCol class="ps-0">
            <a class="fw-semibold">{{ file.name }}</a>
            <p class="mb-0">{{ getSize(file) }}</p>
          </BCol>

          <BCol class="col-auto">
            <button
              type="button"
              @click="handleClickDeleteFile(index)"
              class="btn btn-link btn-lg text-danger"
            >
              <Icon icon="tabler:x" />
            </button>
          </BCol>
        </BRow>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDropzone } from "vue3-dropzone";
import { reactive, onBeforeUnmount } from "vue";
import { BCol, BRow } from "bootstrap-vue-next";
import { Icon } from "@iconify/vue";

// extend File with previewUrl
type FileWithPreview = File & { previewUrl: string };

// reactive state
const state = reactive<{ files: FileWithPreview[] }>({
  files: [],
});

// dropzone setup
function onDrop(acceptFiles: File[]) {
  const newFiles = acceptFiles.map((file) => {
    const f = file as FileWithPreview;
    f.previewUrl = URL.createObjectURL(file);
    return f;
  });
  state.files.push(...newFiles); 
}

const { getRootProps, getInputProps } = useDropzone({
  onDrop,
  multiple: true,
});

// delete file + cleanup
function handleClickDeleteFile(index: number) {
  const file = state.files[index];
  if (file?.previewUrl) {
    URL.revokeObjectURL(file.previewUrl);
  }
  state.files.splice(index, 1);
}

// cleanup all previews on unmount
onBeforeUnmount(() => {
  state.files.forEach((file:any) => {
    if (file.previewUrl) URL.revokeObjectURL(file.previewUrl);
  });
});

// file size helper
function getSize(file: File | undefined) {
  if (!file) return "";
  if (file.size / (1024 * 1024) >= 1) {
    return (file.size / (1024 * 1024)).toFixed(2) + " MB";
  }
  return (file.size / 1024).toFixed(2) + " KB";
}

function onChange() {
  if (state.files[0]) {
    getSize(state.files[0]);
  }
}
</script>
