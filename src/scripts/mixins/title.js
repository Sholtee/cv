/********************************************************************************
*  title.js                                                                     *
*  Author: Denes Solti                                                          *
********************************************************************************/
export default {
  created () {
    let { title } = this.$options;

    if (title) {
      if (typeof title === 'function') title = title.call(this);
      document.title = title;
    }
  }
}