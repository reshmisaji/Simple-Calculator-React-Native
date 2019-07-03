import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { expression: "0", sum: "0" };
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
      const sum = eval(this.state.expression);
      this.setState({ sum: sum, expression: sum });
    } catch (e) {}
  }

  deleteChar() {
    let exp = this.state.expression;
    if (exp.length > 1)
      this.setState({ expression: exp.slice(0, exp.length - 1) });
  }

  clearScreen() {
    this.setState({ expression: "", sum: "" });
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
              style={styles.number}
              titleStyle={styles.title}
              type="clear"
              title="C"
              onPress={this.clearScreen}
            />
            <Button
              style={styles.number}
              title="%"
              titleStyle={styles.title}
              type="clear"
              onPress={this.updateState.bind(this, "%")}
            />
            <Button
              style={styles.number}
              title="/"
              titleStyle={styles.title}
              type="clear"
              onPress={this.updateState.bind(this, "/")}
            />
            <Button
              style={styles.number}
              title="D"
              titleStyle={styles.title}
              type="clear"
              onPress={this.deleteChar}
            />
          </View>

          <View style={styles.row}>
            <Button
              style={styles.number}
              titleStyle={styles.title}
              type="clear"
              title="1"
              size={48}
              onPress={this.updateState.bind(this, 1)}
            />
            <Button
              style={styles.number}
              title="2"
              titleStyle={styles.title}
              type="clear"
              onPress={this.updateState.bind(this, 2)}
            />
            <Button
              style={styles.number}
              title="3"
              titleStyle={styles.title}
              type="clear"
              onPress={this.updateState.bind(this, 3)}
            />
            <Button
              style={styles.number}
              title="+"
              titleStyle={styles.title}
              type="clear"
              onPress={this.updateState.bind(this, "+")}
            />
          </View>

          <View style={styles.row}>
            <Button
              style={styles.number}
              title="4"
              titleStyle={styles.title}
              type="clear"
              onPress={this.updateState.bind(this, 4)}
            />
            <Button
              style={styles.number}
              titleStyle={styles.title}
              type="clear"
              title="5"
              onPress={this.updateState.bind(this, 5)}
            />
            <Button
              style={styles.number}
              titleStyle={styles.title}
              type="clear"
              title="6"
              onPress={this.updateState.bind(this, 6)}
            />
            <Button
              style={styles.number}
              titleStyle={styles.title}
              type="clear"
              title="-"
              onPress={this.updateState.bind(this, "-")}
            />
          </View>

          <View style={styles.row}>
            <Button
              style={styles.number}
              titleStyle={styles.title}
              type="clear"
              title="7"
              onPress={this.updateState.bind(this, 7)}
            />
            <Button
              style={styles.number}
              titleStyle={styles.title}
              type="clear"
              title="8"
              onPress={this.updateState.bind(this, 8)}
            />
            <Button
              style={styles.number}
              titleStyle={styles.title}
              type="clear"
              title="9"
              onPress={this.updateState.bind(this, 9)}
            />
            <Button
              style={styles.number}
              titleStyle={styles.title}
              type="clear"
              title="*"
              onPress={this.updateState.bind(this, "*")}
            />
          </View>

          <View style={styles.row}>
            <Button
              style={styles.number}
              titleStyle={styles.title}
              type="clear"
              title="X"
              onPress={this.closeCalculator}
            />
            <Button
              style={styles.number}
              titleStyle={styles.title}
              type="clear"
              title="0"
              onPress={this.updateState.bind(this, 0)}
            />
            <Button
              style={styles.number}
              titleStyle={styles.title}
              type="clear"
              title="."
              onPress={this.updateState.bind(this, ".")}
            />
            <Button
              style={styles.number}
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
    height: "20%",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  numbers: {
    width: "90%",
    height: "70%",
    backgroundColor: "gray",
    borderRadius: 10
  },
  row: {
    height: "30%",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  number: {
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    color: "black"
  },
  expression: {
    color: "gray",
    fontSize: 20
  },
  sum: {
    color: "black",
    fontSize: 25
  }
});
