package com.mihika.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mihika.model.Word;

public interface WordsRepository extends JpaRepository<Word, Integer> {
	Word findByWord(String word);

}
