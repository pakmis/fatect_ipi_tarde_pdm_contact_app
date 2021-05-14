import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("contacts.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS tb_contact (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        number INTEGER NOT NULL,
        imageUri TEXT NOT NULL,
        address TEXT NOT NULL,
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

export const insertContact = (name, number, imagemUri, address, lat, lng) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO tb_contact (name, number, imageUri, address, lat, lng) VALUES (?,?,?,?,?,?)",
        [name, number, imagemUri, address, lat, lng],
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const searchContacts = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM tb_contact",
        [],
        (_, resultado) => {
          resolve(resultado);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
