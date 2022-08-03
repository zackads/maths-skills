package com.example.maffs;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface SkillRepository extends PagingAndSortingRepository<Skill, String> {
}
