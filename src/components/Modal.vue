<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Default header
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
          x
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
          This is the default body!
        </slot>
       </section>

      <footer class="modal-footer">
        <slot name="footer">
          This is the default footer!
        </slot>
        
      </footer>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    close() {
      this.$emit("close");
    }            
  }
});
</script>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: auto;
    text-align: left;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: block;
    height: auto;
  }

  .modal-header,
  .modal-footer {
    padding: 5px 10px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: var(--app-primary-color);
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    display: flex;
    justify-content: center;
  }

  .modal-body {
    position: relative;
    padding: 0px 10px;
    align-content: flex-start;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: rgba(255,163,26);
    border: 1px solid rgba(255,163,26);
    border-radius: 2px;
  }
</style>