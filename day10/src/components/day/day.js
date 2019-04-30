import moment from "moment";

export default {
  name: "day",
  props: {
    date: {
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {
    getDay: function() {
      return moment(this.date.date).format("D");
    }
  }
};
