<template>
  <div id="add-blog">
          <h2>Add a New Blog Post</h2>
          <form >
              <label>Blog Title:</label>
              <input type="text"  />
              <label>Blog Content:</label>
              <textarea ></textarea>
              <div id="checkboxes">
                  <p>Blog Categories:</p>
                  <label>Sports</label>
                  <input type="checkbox" />
                  <label>Arts</label>
                  <input type="checkbox" />
                  <label>Movies</label>
                  <input type="checkbox" />
                  <label>Travel</label>
                  <input type="checkbox" />
              </div>
              <label>Author:</label>
              <select >
                  <option ></option>
              </select>
              <hr />
              <button v-on:click.prevent="post">Add Blog</button>
          </form>
          <div >
              <h3></h3>
          </div>
      </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
