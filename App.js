import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { expression: "", sum: "0" };
    this.updateState = this.updateState.bind(this);
    this.render = this.render.bind(this);
    this.showSum = this.showSum.bind(this);
    this.clearScreen = this.clearScreen.bind(this);
    this.deleteChar = this.deleteChar.bind(this);
    this.closeCalculator = this.closeCalculator.bind(this);
    this.showCalculator = this.showCalculator.bind(this);
  }

  updateState(value) {
    this.setState({ expression: this.state.expression + "" + value });
  }

  showSum() {
    try {
      const sum = Math.round(eval(this.state.expression) * 1e12) / 1e12;
      if (sum === Infinity || isNaN(sum)) alert("Cannot divide by zero");
      else this.setState({ sum: sum, expression: sum });
    } catch (e) {}
  }

  deleteChar() {
    let exp = this.state.expression;
    if (exp.length > 1)
      this.setState({ expression: exp.slice(0, exp.length - 1) });
  }

  clearScreen() {
    this.setState({ expression: "", sum: "0" });
  }

  closeCalculator() {
    alert("Click back button to exit the application");
  }

  showCalculator() {
    return (
      <View style={styles.container}>
        <View style={styles.screen}>
          <Text style={styles.expression}>{this.state.expression} </Text>
          <Text style={styles.sum}>{this.state.sum}</Text>
        </View>

        <View style={styles.numbers}>
          <View style={styles.row}>
            <Button
              buttonStyle={styles.clearButton}
              titleStyle={styles.otherTitle}
              type="clear"
              title="Clear"
              onPress={this.clearScreen}
            />
            <Button
              title="%"
              buttonStyle={styles.otherButtons}
              titleStyle={styles.otherTitle}
              type="clear"
              onPress={this.updateState.bind(this, "%")}
            />

            <Button
              title="/"
              buttonStyle={styles.operators}
              titleStyle={styles.title}
              type="clear"
              onPress={this.updateState.bind(this, "/")}
            />
          </View>

          <View style={styles.row}>
            <Button
              buttonStyle={styles.number}
              titleStyle={styles.numberTitle}
              type="clear"
              title="1"
              size={48}
              onPress={this.updateState.bind(this, 1)}
            />
            <Button
              title="2"
              buttonStyle={styles.number}
              titleStyle={styles.numberTitle}
              type="clear"
              onPress={this.updateState.bind(this, 2)}
            />
            <Button
              title="3"
              buttonStyle={styles.number}
              titleStyle={styles.numberTitle}
              type="clear"
              onPress={this.updateState.bind(this, 3)}
            />
            <Button
              title="+"
              buttonStyle={styles.operators}
              titleStyle={styles.title}
              type="clear"
              onPress={this.updateState.bind(this, "+")}
            />
          </View>

          <View style={styles.row}>
            <Button
              title="4"
              buttonStyle={styles.number}
              titleStyle={styles.numberTitle}
              type="clear"
              onPress={this.updateState.bind(this, 4)}
            />
            <Button
              buttonStyle={styles.number}
              titleStyle={styles.numberTitle}
              type="clear"
              title="5"
              onPress={this.updateState.bind(this, 5)}
            />
            <Button
              buttonStyle={styles.number}
              titleStyle={styles.numberTitle}
              type="clear"
              title="6"
              onPress={this.updateState.bind(this, 6)}
            />
            <Button
              buttonStyle={styles.operators}
              titleStyle={styles.title}
              type="clear"
              title="-"
              onPress={this.updateState.bind(this, "-")}
            />
          </View>

          <View style={styles.row}>
            <Button
              buttonStyle={styles.number}
              titleStyle={styles.numberTitle}
              type="clear"
              title="7"
              onPress={this.updateState.bind(this, 7)}
            />
            <Button
              buttonStyle={styles.number}
              titleStyle={styles.numberTitle}
              type="clear"
              title="8"
              onPress={this.updateState.bind(this, 8)}
            />
            <Button
              buttonStyle={styles.number}
              titleStyle={styles.numberTitle}
              type="clear"
              title="9"
              onPress={this.updateState.bind(this, 9)}
            />
            <Button
              buttonStyle={styles.operators}
              titleStyle={styles.title}
              type="clear"
              title="*"
              onPress={this.updateState.bind(this, "*")}
            />
          </View>

          <View style={styles.row}>
            <Button
              title="D"
              buttonStyle={styles.otherButtons}
              titleStyle={styles.otherTitle}
              type="clear"
              onPress={this.deleteChar}
            />
            <Button
              buttonStyle={styles.number}
              titleStyle={styles.numberTitle}
              type="clear"
              title="0"
              onPress={this.updateState.bind(this, 0)}
            />
            <Button
              buttonStyle={styles.number}
              titleStyle={styles.title}
              type="clear"
              title="."
              onPress={this.updateState.bind(this, ".")}
            />
            <Button
              buttonStyle={styles.operators}
              titleStyle={styles.title}
              type="clear"
              title="="
              onPress={this.showSum}
            />
          </View>
        </View>
      </View>
    );
  }

  render() {
    return <this.showCalculator />;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  screen: {
    width: "90%",
    height: "30%",
    alignItems: "center",
    justifyContent: "space-around"
  },
  numbers: {
    width: "90%",
    height: "60%",
    borderRadius: 10
  },
  row: {
    height: "30%",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  numberTitle: {
    fontSize: 25,
    color: "white"
  },
  title: {
    fontSize: 25,
    color: "white"
  },
  otherTitle: {
    fontSize: 25,
    color: "black"
  },
  expression: {
    color: "rgb(201,203,204)",
    fontSize: 30
  },
  sum: {
    color: "white",
    fontSize: 40
  },
  number: {
    height: 70,
    width: 70,
    backgroundColor: "rgb(51,51,51)",
    borderRadius: 50
  },
  operators: {
    height: 70,
    width: 70,
    backgroundColor: "rgb(240,154,55)",
    borderRadius: 50
  },
  otherButtons: {
    height: 70,
    width: 70,
    backgroundColor: "rgb(118,118,118)",
    borderRadius: 50
  },
  clearButton: {
    height: 70,
    width: 140,
    backgroundColor: "rgb(118,118,118)",
    borderRadius: 50
  }
});
