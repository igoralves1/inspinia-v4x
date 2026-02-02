<template>
  <BContainer fluid>
    <PageBreadcrumb title="Scrollable"/>

    <BRow>
      <BCol cols="12">
        <BAlert
            show variant="info"
            class="alert-bordered border-start border-info"
            body-class="d-flex align-items-center gap-2"
        >
          <Icon name="tabler:info-circle" class="fs-xxl"/>
          <div>
            To enable full scrolling and view all content, please add
            <code>data-layout-position="scrollable"</code> to the
            <code>&lt;html&gt;</code> tag. To apply this dynamically,
            use <code>setPosition('scrollable')</code> from the <code>useLayout</code>.
          </div>
        </BAlert>
      </BCol>
    </BRow>

    <BRow>
      <BCol cols="12">
        <BCard :style="{height: '1000px'}"/>
      </BCol>
    </BRow>

  </BContainer>
</template>

<script setup lang="ts">
const {setPosition, reset} = useLayout();

usePageTitle('Scrollable Layout')

onMounted(() => {
  setPosition('scrollable');
});

onBeforeUnmount(() => {
  reset();
});
</script>