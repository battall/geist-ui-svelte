<script context="module">
  function getHostFromUrl(url) {
    try {
      return new URL(url).host;
    } catch (e) {
      return url;
    }
  }
</script>

<script>
  export let title = "";
  export let url = "";
  export let showFullLink = false;

  export let style = "";
</script>

<div {style} class="window">
  <header class="header">
    <div class="traffic">
      <span class="close" />
      <span class="mini" />
      <span class="full" />
    </div>

    {#if !!url}
      <div class="address">
        <span class="https">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 10.2H19V21H5V10.2Z" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 12C13.933 12 15.5 10.3882 15.5 8.4C15.5 6.41177 13.933 4.8 12 4.8C10.067 4.8 8.5 6.41177 8.5 8.4C8.5 10.3882 10.067 12 12 12ZM12 13.8C14.8995 13.8 17.25 11.3823 17.25 8.4C17.25 5.41766 14.8995 3 12 3C9.10051 3 6.75 5.41766 6.75 8.4C6.75 11.3823 9.10051 13.8 12 13.8Z"
            />
          </svg>
        </span>
        <a href={url} title={url} target="_blank" rel="nofollow"
          >{showFullLink ? url : getHostFromUrl(url)}</a
        >
      </div>
    {:else}
      <div class="title">{title}</div>
    {/if}
  </header>

  <slot />
</div>

<style lang="scss">
  .window {
    background-color: transparent;
    box-shadow: var(--expressiveness-shadow-large);
    width: max-content;
    max-width: 100%;
    margin: 0 auto;
    border-radius: var(--radius);
    overflow: hidden;
  }

  .header {
    height: 2.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: var(--foreground);
    background-color: var(--background);
    border-bottom: 1px solid var(--accents-2);

    .traffic {
      width: auto;
      position: absolute;
      left: var(--gap-half);
      top: 50%;
      transform: translateY(-50%);
      bottom: 0;
      height: 100%;
      display: flex;
      align-items: center;
      user-select: none;

      span {
        border-radius: 50%;
        width: 0.75rem;
        height: 0.75rem;
        display: inline-block;
        margin-right: 0.5rem;
      }

      .close {
        background-color: #ff5f56;
      }
      .mini {
        background-color: #ffbd2e;
      }
      .full {
        background-color: #27c93f;
      }
    }

    .address {
      height: 1.75rem;
      max-width: 60%;
      min-width: 40%;
      background-color: var(--accents-1);
      color: inherit;
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      overflow: hidden;
      position: relative;
      font-size: 0.75rem;
      .https {
        width: 12px;
        height: 12px;
        margin-right: 5px;
        user-select: none;
        margin-top: -1px;
        color: inherit;
      }
      a {
        max-width: 90%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: inline-block;
        color: inherit;
      }
    }

    .title {
      font-size: 0.75rem;
    }
  }
</style>
