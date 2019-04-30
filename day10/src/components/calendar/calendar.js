import moment from "moment";
//import "moment/locale/ru";
import day from "../day/day";
import vSelect from "vue-select";

export default {
  name: "calendar",
  components: { day, "v-select": vSelect },
  props: {
    displayDate: {
      type: String,
      default() {
        return moment().format("YYYY-MM-DD");
      }
    }
  },
  data() {
    return {
      firstDayOfWeek: "",
      date: "",
      month: "",
      year: ""
    };
  },
  computed: {
    getDay: function() {
      let dat = moment(this.firstDayOfWeek);
      let result = [];
      for (let i = 1; i <= 6; i++) {
        let row = [];
        for (let j = 1; j <= 7; j++) {
          const data = {
            date: dat.format("YYYY-MM-DD"),
            isSame: this.isSame(dat)
          };
          if (
            moment(new Date()).isSame(dat, "year") &&
            moment(new Date()).isSame(dat, "month") &&
            moment(new Date()).isSame(dat, "day")
          ) {
            data.current = true;
          }
          row.push(data);
          dat = dat.add(1, "days");
        }
        result.push(row);
      }
      return result;
    }
  },
  methods: {
    nextYear: function() {
      this.date = moment(this.date).add(1, "years");
    },
    previusYear: function() {
      this.date = moment(this.date).subtract(1, "years");
    },
    nextMonth: function() {
      this.date = moment(this.date).add(1, "months");
    },
    previusMonth: function() {
      this.date = moment(this.date).subtract(1, "months");
    },
    setFirstDayOfMonth: function() {
      const firstDayOfMonth = moment.utc(this.date).startOf("month");
      const firstDayOfWeek = moment.utc(firstDayOfMonth).startOf("week");
      this.firstDayOfWeek = firstDayOfWeek;
    },
    isSame: function(date) {
      if (
        moment(this.date).isSame(date, "year") &&
        moment(this.date).isSame(date, "month")
      ) {
        return true;
      }
      return false;
    }
  },
  watch: {
    month: function(newVal) {
      if (newVal != null) {
        this.date = moment(this.date).month(this.month);
      }
    },
    year: function(newVal) {
      if (newVal != null) {
        this.date = moment(this.date).year(this.year);
      }
    },
    date: function(newVal) {
      this.month = moment(this.date).format("MMMM");
      this.year = moment(this.date).format("YYYY");
      this.setFirstDayOfMonth();
    }
  },
  created() {
    this.dayNames = moment.weekdaysShort();
    const flagStartDay = moment()
      .startOf("week")
      .format("d");
    if (1 == flagStartDay) {
      this.dayNames.push(this.dayNames.shift());
    }
    this.date = this.displayDate;
    this.months = moment.months();
    this.setFirstDayOfMonth();
  }
};
