<template>
  <BContainer fluid>
    <PageBreadcrumb title="Gray Topbar"/>

    <BRow>
      <BCol cols="12">
        <BAlert
            show variant="info"
            class="alert-bordered border-start border-info"
            body-class="d-flex align-items-center gap-2"
        >
          <Icon name="tabler:info-circle" class="fs-xxl"/>
          <div>
            To switch to a gray topbar, add
            <code>data-topbar-color="gray"</code> to the
            <code>&lt;html&gt;</code> tag. To apply this dynamically, use
            <code>setTopBarColor('gray')</code> from the <code>useLayout</code>.
          </div>
        </BAlert>
      </BCol>
    </BRow>

  </BContainer>
</template>

<script setup lang="ts">
const {setTopBarColor, reset} = useLayout();

usePageTitle('Gray Topbar')

onMounted(() => {
  setTopBarColor('gray')
});

onBeforeUnmount(() => {
  reset();
});
</script>