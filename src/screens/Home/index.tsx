import React, { useEffect } from "react";
import { Image, View, FlatList } from "react-native";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { GameCard } from "../../GameCard";

import { styles } from "./styles";

import { GAMES } from "../../utils/games";

export function Home() {
  useEffect(() => {
    fetch("http://192.168.102.167:3333/games")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading
        title="Encontre seu duo"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
