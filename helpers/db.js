import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("contacts.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS tb_contact (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        imageUri TEXT NOT NULL,
        adress TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL
        );`
      ),
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(_err);
        };
    });
  });

  return promise;
};

export const inserirLugar = (name, imagemUri, address, lat, lng) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
